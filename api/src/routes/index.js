/**
 * Created by trKing on 2/14/2017.
 */
let Router = require('restify-router').Router
let allRoutes = new Router()

let employeeRoutes = require('./employee')
let toolsRoutes = require('./tools')

allRoutes.add('/tools', toolsRoutes)
allRoutes.add('/employee', employeeRoutes)

module.exports = allRoutes