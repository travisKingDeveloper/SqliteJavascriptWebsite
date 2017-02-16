/**
 * Created by trKing on 2/14/2017.
 */

let Router = require('restify-router').Router
let uuid = require('node-uuid');
let employeeInstance = new Router()
let {insertEmployee, selectAllEmployees, selectOneEmployee, updateEmployee, deleteEmployee} = require('./employee')

employeeInstance.post('/', (req, res, next) => {
    let employee = {
        name: req.body.name,
        startDate: req.body.startDate,
        salary: req.body.salary,
        isActive: req.body.isActive,
        employeeID: uuid.v4()
    }

    insertEmployee(employee)
        .then(() => {
            res.send(JSON.stringify({success: true}))
            next()
        })
        .catch((err) => {
            res.send(JSON.stringify({
                error: err.message,
                success: false
            }))
            next()
        })
})

employeeInstance.get('/', (req, res, next) => {
    selectAllEmployees()
        .then((results) => {
            res.send(results)
            next()
        })
        .catch((err) => {
            res.send(JSON.stringify(err))
            next()
        })
})

employeeInstance.get('/:employeeID', (req, res, next) => {
    let employeeID = req.params.employeeID

    selectOneEmployee(employeeID)
        .then((employee) => {
            res.send(employee)
            next()
        })
        .catch((err) => {
            res.send(err)
            next()
        })
})

employeeInstance.put('/:employeeID', (req, res, next) => {
    let employee = {
        name: req.body.name,
        startDate: req.body.startDate,
        salary: req.body.salary,
        isActive: req.body.isActive,
        employeeID: req.params.employeeID
    }

    updateEmployee(employee)
        .then(() => {
            res.send(JSON.stringify({success: true}))
            next()
        })
        .catch((err) => {
            res.send(err)
            next()
        })
})

employeeInstance.del('/:employeeID', (req, res, next) => {
    let employeeID = req.params.employeeID

    deleteEmployee(employeeID)
        .then(() => {
            res.send(JSON.stringify({success: true}))
            next()
        })
        .catch((err) => {
            res.send(err)
            next()
        })
})

module.exports = employeeInstance