const express = require('express')
const config  = require('../config')
const debug = require('debug')('startExpressFactory')

//var bodyParser = require('body-parser')

const app = express()
// parse application/json
app.use(express.json())
app.use(express.urlencoded())

const getExpressApp = () => {
    return app
}

const startListener = () => {
    app.listen(config.get("workerRestInputPort"), config.get("workerRestInputAddress"), () => {
        console.log(`workerTemplate listening at http://${config.get("workerRestInputAddress")}:${config.get("workerRestInputPort")}`)
    })    
}

const expressFactory = {
    getExpressApp,
    startListener
}

module.exports = expressFactory