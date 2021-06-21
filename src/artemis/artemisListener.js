
const container = require('rhea');
const config  = require('../config')
const debug = require('debug')('artemisListener')
const manageEvent = require('../event/eventHandler')

let connection = null


function startListener() {
    if (connection === null ){
        const newContainer = container.create_container({"id" : `listener`})
        connection = newContainer.connect({'host':config.get("workerArtemisInputAddress"), 'port':config.get("workerArtemisInputPort"), 'username' : config.get("workerArtemisInputUser"), 'password' : config.get("workerArtemisInputPassword")});    
        connection.open_receiver(config.get("workerArtemisInputQueue"));
        connection.on('message', function (context) {
            //TODO : add call to worker implémentation
            debug('Event')
            debug(context.message.body);
            console.log('message receive')
            manageEvent(context.message.body)
        });
    }
}

function stopListener() {
    if (connection !== null && connection.is_open()) {
        debug('Stop listener')
        connection.close()
    }
    connection = null
}

const artemisListener = {
    "startListener" : startListener,
    "stopListener" : stopListener
}

module.exports = artemisListener