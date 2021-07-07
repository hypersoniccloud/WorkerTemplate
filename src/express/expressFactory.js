const express = require('express')
const config  = require('../config')
const debug = require('debug')('startExpressFactory')
const apiMiddleware = require('../api/apiMiddleware')

//var bodyParser = require('body-parser')

const app = express()
// parse application/json
app.use(express.json())
app.use(express.urlencoded())

app.use(apiMiddleware)

const startListener = () => {
    app.listen(config.get("workerRestInputPort"), config.get("workerRestInputAddress"), () => {
        console.log(`workerTemplate listening at http://${config.get("workerRestInputAddress")}:${config.get("workerRestInputPort")}`)
    })    
}

const expressFactory = {
    startListener
}

module.exports = expressFactory