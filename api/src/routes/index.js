/**
 * Created by trKing on 2/14/2017.
 */
let Router = new require('restify-router').Router()

let employeeRoutes = require('./employee/index')
let toolsRoutes = require('./tools/index')

Router.add('/tools', toolsRoutes)
Router.add('/employee', employeeRoutes)

module.exports = Router