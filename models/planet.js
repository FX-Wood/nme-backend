const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: String,
    type: String,
    species: [{ type: Schema.Types.ObjectId, ref: 'Species'}]
})

module.exports = mongoose.model('Planet', planetSchema)