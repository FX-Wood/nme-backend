const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    name: String,
    warpCapable: Boolean
})

module.exports = mongoose.model('Species', speciesSchema)