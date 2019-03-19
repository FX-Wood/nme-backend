// import expressjs
const express = require('express');
const router = express.Router();

// import database models
const Planet = require('../models/planet');
const Species = require('../models/species');


router.route('/planets')
    // GET /api/planets - get all planets
    .get( (req, res) => {
        console.log('// POST /api/planets', req.originalUrl)
        Planet.find( (err, planets) => {
            if (!err) {
                res.status(200).json(planets)
            } else {
                res.status(500).json(err)
            }
        })
    })

    // POST /api/planets - create one planet
    .post( ( req, res ) => {
        console.log('// POST /api/planets', req.originalUrl)
        let planet = new Planet({
            name: req.body.name,
            type: req.body.type
        })
        planet.save( (err, doc) => {
            if ( !err ) {
                res.status( 201 ).json( doc )
            } else {
                res.status( 500 ).jsoin( err )
            }
        })
    })
router.route( '/planets/:pid' )
    // GET /api/planets/:pid - get one planet
    .get( ( req, res ) => {
        console.log('// GET /api/planets/:pid', req.originalUrl)
        Planet.findById( req.params.id ).populate( 'species' ).exec( (err, planet) => {
            if ( !err ) {
                res.status( 201 )
            } else {
                res.status(500).json(err)
            }
        })
    })

    // PUT /api/planets/:pid - update one planet
    .put( ( req, res ) => {
        console.log('PUT /api/planets/:pid', req.originalUrl)
      (async () => {
          try {
              let planet = await Planet.findById(req.params.id)
              if (req.body.name) planet.name = req.body.name
              if (req.body.type) planet.type = req.body.type
              planet = await planet.save()
              res.send()
          } catch(err) {
            console.log(err)
          }
      })()
    } )

router.route('/planets/:pid/species')
    // GET /api/planets/:pid/species - get all species from one planet
    .get((req, res) => {
        console.log('GET /planets/:pid/species')
        Planet.findById(req.params.pid).populate('species').exec((err, planet) => {
            if (!err) {
                res.status(201).json(planet)
            } else {
                res.status(500).json(err)
            }
        })
    })

    // POST /api/planets/:pid/species - makes a new species for one planet
    .post( (req, res, next) => {
        console.log('POST /planets/:pid/species', req.originalUrl)
        const planet = Planet.findById(req.params.pid).populate('species').exec( (err, planet) => {
            console.log(planet)
            console.log('planet.species', planet.species)
            console.log('typeof', typeof planet.species)
            if (!err) {
                if (!planet.species.find(species => species.name === req.body.name)) {
                    const species = new Species({
                        name: req.body.name,
                        warpCapable: req.body.warpCapable
                    })
                    species.save( (err, species) => {
                        if (!err) {
                            planet.species.push(species._id)
                            planet.save( (err, planet) => {
                                if (!err) {
                                    res.status(201).json(planet)
                                } else {
                                    res.status(500).json(err)
                                }
                            })
                        } else {
                            res.status(500).json(err)        
                        }
                    })
                } else {
                    let err = Error(`${req.body.name} already exists on ${planet.name}`)
                    res.status(400)
                    next(err)
                }
            } else {
                res.status(500).json(err)
            }
        })
    })

    // GET /api/planets/:pid/species/:sid - gets one species from one planet
    router.route('/planets/:pid/species/:sid')
        .get( (req, res) => {
            console.log('GET /api/planets/:pid/species/:sid', req.originalUrl)
            Planet.findById(req.params.pid).populate('species').exec( (err, planet) => {
                if (!err) {
                    let s = planet.species.find(species => {
                        return species._id.toString() === req.params.sid
                    })
                    res.status(201).json({ planet, species: s })
                } else {
                    res.status(400).json(err)
                }
            })
        })
    // PUT /api/planets/:pid/species/:sid - update one species from one planet
    // returns 203, no data
        .put( (req, res) => {
            console.log('PUT /api/planets/:pid/species/:sid', req.originalUrl)
            Species.findByIdAndUpdate(req.params.sid, {
                warpCapable: req.body.warpCapable
            }, {
                new: true
            }, (err, species) => {
                if (!err) {
                    res.status(203).json('Success!')
                } else {
                    res.status(500).json(err)
                }
            })
        })
    module.exports = router;