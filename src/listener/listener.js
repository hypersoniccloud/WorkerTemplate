const debug = require('debug')('listener')
const artemisListener = require('../artemis/artemisListener')
const config = require('../config')
const constants = require('../constant')

let status = null

function startListener() {
    if (config.get('workerReceiveType') === 'ASYNC') {
        artemisListener.startListener()
    }
    status = constants.LISTENER_STARTED
}

function stopListener() {
    if (config.get('workerReceiveType') === 'SYNC') {
        console.log('Could not stop rest listener !')
        debug('Error could not stop rest listener !')
        status = constants.LISTENER_STARTED
    }
    else {
        artemisListener.stopListener()
        status = constants.LISTENER_PAUSED
    }
}

function getListenerStatus() {
    return status
}

const listener = {
    startListener,
    stopListener,
    getListenerStatus
}

module.exports = listener