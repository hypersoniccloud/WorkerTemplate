const debug = require('debug')('sender');
const artemisSender = require('../artemis/artemisSenders');
const restSender = require('../rest/restSender');
const config = require('../config');
const mongooseManager = require('../mongo/mongooseManager');
const mongoose = require('mongoose');

async function sendEvent(senderNumber, sourceEvent, event) {
    let tmpEvent = JSON.parse(JSON.stringify(sourceEvent));
    tmpEvent.idComponent = config.get("idComponent");
    tmpEvent.subidComponent = config.get("subidComponent");
    tmpEvent.flowId = sourceEvent.flowId;
    tmpEvent.eventId = new mongoose.Types.ObjectId();
    tmpEvent.previousEventId = sourceEvent.eventId;
    tmpEvent.creationDate = new Date();
    tmpEvent.type = event.type;
    tmpEvent.eventTypeInfo = event.eventTypeInfo;
    tmpEvent.content = event.content;


    let response = null;
    const workerSendType = config.get(`workerTargetSendType${senderNumber}`);
    if (workerSendType === 'SYNC') {
        response = await restSender.sendEvent(senderNumber, tmpEvent)
    }
    else if (workerSendType === 'ASYNC') {
        response = artemisSender.sendEvent(senderNumber, tmpEvent)
    }

    if (workerSendType !== 'NONE') {
        tmpEvent.status = response.isInError ? "KO": "OK";
        mongooseManager.saveEvent(tmpEvent);        
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
