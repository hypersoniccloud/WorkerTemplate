const expressFactory = require('../express/expressFactory')
const listener = require('../listener/listener')
const debug = require('debug')('adminListener')
const configManager = require('./configManager')


startExpressForAdmin = ()  => {
    const app = expressFactory.getExpressApp()

    console.log("on est ici")
    //add middleware
    app.put(`/api/admin/start`, (req, res) => {
        debug('start')
        listener.startListener()
        res.status(200).send("Message : ok")
    })

    app.put(`/api/admin/stop`, (req, res) => {
        debug('stop')
        listener.stopListener()
        res.status(200).send("Message : ok")
    })

    app.get('/api/admin/config', (req, res) =>{
        debug('get config')
        const config = configManager.getProperties()
        res.status(200).send(config)
    })

    app.get('/api/admin/status', (req, res) =>{
        debug('get status')
        const status = {
            "status" : listener.getListenerStatus()
        }
        res.status(200).send(JSON.stringify(status))
    })


    /*
    app.listen(config.get("workerRestInputPort"), config.get("workerRestInputAddress"), () => {
        console.log(`worker listening at http://${config.get("workerRestInputAddress")}:${config.get("workerRestInputPort")}/api/admin}`)
    })
    */
}

const restAdminListener = {
    "startListener" : startExpressForAdmin
}

module.exports = restAdminListener