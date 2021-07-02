const express = require('express')
//var bodyParser = require('body-parser')

const app = express()
const listener = require('../listener/listener')
const debug = require('debug')('adminListener')
const config  = require('../config')
const configManager = require('./configManager')


startExpressForAdmin = ()  => {

    console.log("on est ici")
    // parse application/json
    app.use(express.json())
    app.use(express.urlencoded())
    
    //add middleware
    app.put(`/api/admin/start`, (req, res) => {
        debug('start')
        listener.startListener()
        res.status(200).send("Message : ok")
    })

    app.put(`/api/admin/stop`, (req, res) => {
        debug('stop')
        listener.stopListener()
        res.status(200).send("Message : ok")
    })

    app.get('/api/admin/config', (req, res) =>{
        debug('get config')
        const config = configManager.getProperties()
        res.status(200).send(config)
    })

    app.listen(config.get("workerRestInputPort"), config.get("workerRestInputAddress"), () => {
        console.log(`worker listening at http://${config.get("workerRestInputAddress")}:${config.get("workerRestInputPort")}/api/admin}`)
    })
}

const restAdminListener = {
    "startListener" : startExpressForAdmin
}

module.exports = restAdminListener