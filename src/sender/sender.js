const debug = require('debug')('sender');
const artemisSender = require('../artemis/artemisSenders');
const restSender = require('../rest/restSender');
const config = require('../config');
const mongooseManager = require('../mongo/mongooseManager');

function sendEvent(senderNumber, event) {
    let response = null;
    if (config.get(`workerTargetSendType${senderNumber}`) === 'SYNC') {
        response = restSender.sendEvent(senderNumber, event)
    }
    else if (config.get(`workerTargetSendType${senderNumber}`) === 'ASYNC') {
        response = artemisSender.sendEvent(senderNumber, event)
    }

    event.status = response.isInError ? "KO": "OK";
    mongooseManager.saveEvent(event);        
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
