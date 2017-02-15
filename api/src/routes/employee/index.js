/**
 * Created by trKing on 2/14/2017.
 */

let Router = require('restify-router').Router
let uuid = require('node-uuid');
let employeeInstance = new Router()
let {insertEmployee} = require('./employee')

// insertEmployee({
// //EmployeeID, Name, StartDate, EndDate, Salary, IsActive
//     employeeID: '8161e8d9-f4d7-41bb-846a-577b2ac90f24',
//     name: 'Travis',
//     startDate: Date.now(),
//     salary: 123456,
//     isActive: false
// }).then((result) => {
//     console.log('result ' + result)
// }).catch((err) => {
//     console.log(`insertEmployee ${err}`)
// })

employeeInstance.post('/employee', (req, res, next) => {
    let {name, startDate, salary, isActive} = req.body;
    let employee = {
        name: name,
        startDate: startDate,
        salary: salary,
        isActive: isActive,
        employeeID: uuid.v4()
    }

    insertEmployee(employee)
        .then(() => {
            res.send(JSON.stringify({success: true}))
            next()
        })
        .catch((err) => {
            res.send(JSON.stringify({
                error: err,
                success: false
            }))
            next()
        })
})

module.exports = employeeInstance