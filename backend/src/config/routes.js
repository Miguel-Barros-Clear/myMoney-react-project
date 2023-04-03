const express = require('express')

module.exports = function (server) {
    // default url
    const router = express.Router()
    server.use('/api', router)

    // payment cycle routes
    const BillingCycle = require("../api/billingCycle/billingCycleService");
    BillingCycle.register(router, "/billingCycles");
}