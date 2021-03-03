const express = require('express')
const incidentService = require('../api/incident/incidentService.js')

module.exports = function(server) {

    /*      
     * Open Routes
     */     
    const openApi = express.Router()     
    server.use('/api', openApi)
    incidentService.register(openApi, '/incidents')

    /*      
     * Protected Routes (Using JWT)

    const protectedApi = express.Router()     
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    // Enable the billing cycle information service 
    billingCycleService.register(protectedApi, '/billingCycles')
    
    // Enable the summary operations service
    protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)
    */     

}