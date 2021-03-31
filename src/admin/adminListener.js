const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const listener = require('../listener/listener')
const debug = require('debug')('adminListener')
const config  = require('../config')


startExpressForAdmin = ()  => {

    // parse application/json
    app.use(bodyParser.json())
    
    //add middleware
    app.put(`${config.get("restAdminPath")}/start`, (req, res) => {
        debug('start')
        listener.startListener()
        res.status(200).send("Message : ok")
    })

    app.put(`${config.get("restAdminPath")}/stop`, (req, res) => {
        debug('stop')
        listener.stopListener()
        res.status(200).send("Message : ok")
    })

    app.listen(config.get("restAdminPort"), config.get("restAdminAddress"), () => {
        debug(`worker listening at http://${config.get("restAdminAddress")}:${config.get("restAdminPort")}/${config.get("restAdminPath")}`)
    })
}

const restAdminListener = {
    "startListener" : startExpressForAdmin
}

module.exports = restAdminListener