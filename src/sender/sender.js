const debug = require('debug')('sender')
const artemisSender = require('../artemis/artemisSenders')
const restSender = require('../rest/restSender')
const config = require('../config')

function sendEvent(senderNumber, event) {
    if (config.get(`sendType${senderNumber}`) === 'sync') {
        restSender.sendEvent(senderNumber, event)
    }
    else {
        artemisSender.sendEvent(senderNumber, event)
    }
}

function startSender(senderNumber) {
    if (config.get(`sendType${senderNumber}`) === 'async') {
        artemisSender.startSender(senderNumber)
    }
}

const sender = {
    "startSender" : startSender,
    "sendEvent" : sendEvent
}

module.exports = sender
