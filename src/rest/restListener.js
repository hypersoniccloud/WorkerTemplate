const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const cors = require('cors')
const path = require('path')

const manageEvent = require('../event/eventHandler')
const config  = require('../config')
const debug = require('debug')('startExpressForData')

startExpressForData = ()  => {

    // parse application/json
    app.use(bodyParser.json())
    
    //add message middleware
    app.put(config.get("workerRestInputPath"), (req, res) => {
        debug('Event')
        debug(req.body)
        manageEvent(req.body)
        res.status(200).send("Message : ok")
    })

    app.listen(config.get("workerRestInputPort"), config.get("workerRestInputAddress"), () => {
        debug(`OutputFileEndpoint listening at http://${config.get("workerRestInputAddress")}:${config.get("workerRestInputPort")}`)
    })
}

const restListener = {
    "startListener" : startExpressForData
}

module.exports = restListener