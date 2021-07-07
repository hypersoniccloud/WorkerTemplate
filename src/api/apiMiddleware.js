const express = require('express')
const adminMiddleware = require("../admin/adminListener")
const restMiddleware = require("../rest/restListener")
const config  = require('../config')



const api = express()

api.use("/api/admin", adminMiddleware)
if (config.get("workerReceiveType") == 'SYNC') {
    api.use("/api/event", restMiddleware)
}

module.exports = api