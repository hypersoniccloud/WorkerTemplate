const sender = require('./sender/sender')
const debug = require('debug')('manageEvent')

function manageEvent(event) {
    console.log('event')
    console.log(event)
    sender.sendEvent(1, event)
    sender.sendEvent(2, event)
}

const worker = {
    "manageEvent" : manageEvent
}
module.exports = worker