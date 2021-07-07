const express = require('express')
const manageEvent = require('../event/eventHandler')
const debug = require('debug')('startExpressForData')

const event = express()

    
//add message middleware
event.put("/", (req, res) => {
    debug('Event')
    debug(req.body)
    manageEvent(req.body)
    res.status(200).send("Message : ok")
})

module.exports = event