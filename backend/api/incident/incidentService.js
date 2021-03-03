const _ = require('lodash')
const Incident = require('./incident')
//const exceptionHandler = require('../exception/exceptionHandler')

// Create billing cycle REST service
Incident.methods(['get', 'post', 'put', 'delete'])

// Always return new values and run validations during update operations
Incident.updateOptions({new: true, runValidators: true})

// Intercept requests to keep an error pattern
//Incident.after('post', exceptionHandler.sendErrorsOrNext).after('put', exceptionHandler.sendErrorsOrNext)

/*
BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})
*/

module.exports = Incident