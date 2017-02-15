/**
 * Created by trKing on 2/14/2017.
 */

let sqlite3 = require('sqlite3').verbose()
let fs = require('fs')
let glob = require('glob')

let config = require('../../config')

var exists = fs.existsSync('../employees.db')

if(!exists){
   new sqlite3.Database('../employees.db').close()
}

let employees = new sqlite3.Database('../employees.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(`Error opening database employees.db ${err}`)
    } else {
        console.log('SQLITE DB employees.db opened successfully.')
    }
})

let callFile = (fn, db) => {
    fs.readFile(fn, {}, (err, sql) => {
        if (err) {
            console.log(`Error reading file ${err}`)
        } else {
            db.serialize(() => {
                db.exec(sql.toString());
            })
        }
    })
}

module.exports.initializeDB = () => {
    glob('*.sql', {}, (err, files)=> {
        if (err) {
            console.log(`Error matching file ${err}`)
        } else {
            files.map((file) => { callFile(file, employees) })
        }
    })
}