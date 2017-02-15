/**
 * Created by Travis on 2/15/2017.
 */
let sqlite3 = require('sqlite3')
let config = require('../../config')

let db = new sqlite3.Database('../../db/employees.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(`Error opening database employees.db ${err}`)
    }
});

let insertEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        let sql =
            `INSERT INTO 
                Employee (EmployeeID, Name, StartDate, EndDate, Salary, IsActive) 
            VALUES 
                ('${employee.employeeID}', '${employee.name}', '${employee.startDate}',
                    '${employee.endDate ? employee.endDate : 'NULL'}', ${employee.salary}, ${employee.isActive ? 1 : 0});`

        db.run(sql , undefined, (err) => {
            if(err){
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