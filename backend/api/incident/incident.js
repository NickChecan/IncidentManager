const restful = require('node-restful')
const mongoose = restful.mongoose

const incidentSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    shortDescription: { type: String }
})

module.exports = restful.model('Incident', incidentSchema)