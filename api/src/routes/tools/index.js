/**
 * Created by trKing on 2/14/2017.
 */

let Router = require('restify-router').Router
let toolsInstance = new Router()

let healthCheck = (req, res, next) => {
    res.send(JSON.stringify({healthy: true}))
    next()
}

toolsInstance.get('/status', healthCheck)

module.exports = toolsInstance