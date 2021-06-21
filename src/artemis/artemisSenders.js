
const container = require('rhea');
const config  = require('../config')
const debug = require('debug')('artemisSender')


let connectionArray = [0,1,2,3,4,5].map(id => null)
let sendable = [0,1,2,3,4,5].map(id => false)
let contextHolder = [0,1,2,3,4,5].map(id => null)

function startSender(senderNumber) {
    if (connectionArray[senderNumber] === undefined || connectionArray[senderNumber] === null){
        const newContainer = container.create_container({"id" : `sender_${senderNumber}`})
        connectionArray[senderNumber] = newContainer.connect({ 'host':config.get(`workerArtemisTargetAddress${senderNumber}`), 'port':config.get(`workerArtemisTargetPort${senderNumber}`), 'username' : config.get(`workerArtemisTargetUser${senderNumber}`), 'password' : config.get(`workerArtemisTargetPassword${senderNumber}`)});
        connectionArray[senderNumber].open_sender({"target" : {'address':config.get(`workerArtemisTargetQueue${senderNumber}`), 'durable' : true} , "autosettle" : true});
        connectionArray[senderNumber].once('sendable', function (context) {
            debug(`sendable - ${context.container.id}`)
            console.log(`sendable - ${context.container.id}`)
            sendable[senderNumber] = true
            contextHolder[senderNumber] = context
        });
        
        connectionArray[senderNumber].on('disconnected', function (context) {
            debug(`Disconnected - ${context.container.id}`);
            connection.open_sender({"target" : {'address':config.get(`workerArtemisTargetQueue${senderNumber}`), 'durable' : true} , "autosettle" : true});
        });
            }
}

function sendEvent(senderNumber, event) {
    if (contextHolder[senderNumber] !== null && contextHolder[senderNumber].sender.sendable()) {
        debug(`Send event for sender ${senderNumber}`)
        contextHolder[senderNumber].sender.send({"body":event})
    }
    else {
        debug(`Send event for ${senderNumber} in 1s`)
        setTimeout(() => sendEvent(senderNumber, event), 1000)
    }

}

const artemisSenders = {
    "startSender" : startSender,
    "sendEvent" : sendEvent
}

module.exports = artemisSenders