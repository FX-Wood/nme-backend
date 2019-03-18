// import expressjs
const express = require('express');
const router = express.Router();

// import database models
const Planet = require('../models/planet');
const Species = require('../models/species');


router.route('/planets')
    // GET /api/planets - get all planets
    .get( (req, res) => {
        Planet.find(( err, planets) => {
            if (!err) {
                res.status(200).json(planets)
            } else {
                res.status(500).json(err)
            }
        })
    })

    // POST /api/planets - create one planet
    .post( (req, res) => {
        let planet = new Planet({
            name: req.body.name,
            type: req.body.type
        })
        planet.save( (err, doc) => {
            if (!err) {
                res.status(201).json(doc)
            } else {
                res.status(500).jsoin(err)
            }
        })
    })
    // GET /api/planets/:pid - get one planet

    // PUT /api/planets/:pid - update one planet

    // GET /api/planets/:pid/species - get all species from one planet

    // GET /api/planets/:pid/species/:sid - gets one species from one planet

    // POST /api/planets/:pid/species/:sid - makes a new species for one planet

    module.exports = router;