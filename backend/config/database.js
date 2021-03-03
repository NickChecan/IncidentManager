// Mongoose will be responsible for the database connection and the object relational mapping
const mongoose = require('mongoose')

// Connect to the mongo instance available at the docker db container service
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://db/db_incident', { useMongoClient: true })
//module.exports = mongoose.connect('mongodb://localhost/db_incident', { useMongoClient: true })

// Adapt and modify certain error messages regarding field validations
mongoose.Error.messages.general.required = "The '{PATH}' attribute is required."
mongoose.Error.messages.Number.min = "The informed '{VALUE}' is lesser than the minimum limit of '{MIN}'."
mongoose.Error.messages.Number.max = "The informed '{VALUE}' is greater than the maximum limit of '{MAX}'."
mongoose.Error.messages.String.enum = "The '{VALUE}' is not valid value for '{PATH}'."