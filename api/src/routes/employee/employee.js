/**
 * Created by Travis on 2/15/2017.
 */
let sqlite3 = require('sqlite3')

let initDB = (error) => {
    return new sqlite3.Database(`${__dirname}\\..\\..\\db\\employees.db`, sqlite3.OPEN_READWRITE, error)
}

let insertEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        let sql =
            `INSERT INTO 
                Employee (EmployeeID, Name, StartDate, EndDate, Salary, IsActive) 
            VALUES 
                ('${employee.employeeID}', '${employee.name}', '${employee.startDate}',
                    '${employee.endDate ? employee.endDate : 'NULL'}', ${employee.salary}, ${employee.isActive ? 1 : 0});`

        let db = initDB((err) => {
            if (err) {
                return reject(err)
            }
        })

        db.run(sql, undefined, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

let selectAllEmployees = () => {
    return new Promise((resolve, reject) => {
        let sql =
            `SELECT * FROM Employee`

        let results = []

        let rowHandler = (err, row) => {
            if (err) {
                reject(err)
            } else {
                results.push({
                    name: row.Name,
                    id: row.EmployeeID,
                    startDate: row.StartDate,
                    endDate: row.EndDate,
                    salary: row.Salary,
                    isActive: row.IsActive
                })
            }
        }

        let completeCallback = (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        }

        let db = initDB((err) => {
            if(err){
                reject(err)
            }
        })

        db.each(sql, rowHandler, completeCallback)
    })
}

let selectOneEmployee = (employeeID) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM Employee WHERE EmployeeID = ${}`
    })
}

module.exports = {
    insertEmployee: insertEmployee,
    selectAllEmployees: selectAllEmployees
}