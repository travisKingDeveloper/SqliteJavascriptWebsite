/**
 * Created by Travis on 2/15/2017.
 */
let sqlite3 = require('sqlite3')
let config = require('../../config')

let initDB = (error)=> {
    return new sqlite3.Database('../../db/employees.db', sqlite3.OPEN_READWRITE, error)
}

let insertEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        initDB((err) => {
            return reject(err)
        })

        let sql =
            `INSERT INTO 
                Employee (EmployeeID, Name, StartDate, EndDate, Salary, IsActive) 
            VALUES 
                ('${employee.employeeID}', '${employee.name}', '${employee.startDate}',
                    '${employee.endDate ? employee.endDate : 'NULL'}', ${employee.salary}, ${employee.isActive ? 1 : 0});`

        db.run(sql, undefined, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    });
}

module.exports = {
    insertEmployee: insertEmployee
}