const debug = require('debug')('sender')
const artemisSender = require('../artemis/artemisSenders')
const restSender = require('../rest/restSender')
const config = require('../config')

function sendEvent(senderNumber, event) {
    if (config.get(`workerTargetSendType${senderNumber}`) === 'SYNC') {
        restSender.sendEvent(senderNumber, event)
    }
    else if (config.get(`workerTargetSendType${senderNumber}`) === 'ASYNC') {
        artemisSender.sendEvent(senderNumber, event)
    }
}

function startSender(senderNumber) {
    if (config.get(`workerTargetSendType${senderNumber}`) === 'ASYNC') {
        artemisSender.startSender(senderNumber)
    }
}

const sender = {
    "startSender" : startSender,
    "sendEvent" : sendEvent
}

module.exports = sender
