/**
 * Created by Travis on 2/16/2017.
 */

let axios = require('axios')

let getInstance = () => {
    return axios.create({
        baseURL: 'http://localhost:3001/data/',
    })
}

let getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        getInstance().get('/employees')
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}



module.exports = {
    getAllEmployees: getAllEmployees
}