/**
 * Created by trKing on 2/14/2017.
 */
let restify = require('restify')
var plugins = require('restify-plugins')

let routes = require('./routes')
let config = require('./config')

let server = restify.createServer({
    name: 'employee-management-api'
})
server.use(plugins.bodyParser())

routes.applyRoutes(server)

server.listen(config.port, () => {
    console.log(`Server started at ${server.name} on port ${config.port}`)
})

