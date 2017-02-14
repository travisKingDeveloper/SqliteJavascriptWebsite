/**
 * Created by trKing on 2/14/2017.
 */
let Router = new require('restify-router').Router()

let employeeRoutes = require('./employee')
let toolsRoutes = require('./tools')

Router.add('/tools', toolsRoutes)
Router.add('/employee', employeeRoutes)

module.exports = Router