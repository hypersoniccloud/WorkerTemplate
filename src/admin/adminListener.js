const express = require('express')
const constants = require('../constant')
const listener = require('../listener/listener')
const debug = require('debug')('adminListener')
const configManager = require('./configManager')

const admin = express()

//add middleware
admin.put(`/start`, (req, res) => {
    debug('start')
    listener.startListener()
    res.status(200).send("Message : ok")
})

admin.put(`/stop`, (req, res) => {
    debug('stop')
    listener.stopListener()
    res.status(200).send("Message : ok")
})

admin.get('/config', (req, res) =>{
    debug('get config')
    const config = configManager.getProperties()
    res.status(200).send(config)
})

admin.get('/status', (req, res) =>{
    debug('get status')
    const status = {
            "listener" : {
                "event" : listener.getListenerStatus(),
                "admin" : constants.LISTENER_STARTED
            }
    }
    res.status(200).send(JSON.stringify(status))
})


module.exports = admin