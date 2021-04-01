################################################################################
# This file will be replaced by the generated worker.
#
# The generated worker have to implement manageEvent function and import sender
################################################################################

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
