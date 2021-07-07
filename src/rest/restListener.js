const expressFactory = require('../express/expressFactory')

const manageEvent = require('../event/eventHandler')
const config  = require('../config')
const debug = require('debug')('startExpressForData')

startExpressForData = ()  => {
    const app = expressFactory.getExpressApp()

    
    //add message middleware
    app.put(config.get("workerRestInputPath"), (req, res) => {
        debug('Event')
        debug(req.body)
        manageEvent(req.body)
        res.status(200).send("Message : ok")
    })

}

const restListener = {
    "startListener" : startExpressForData
}

module.exports = restListener