//* /users [ POST, GET]
//* /users:id [GET]

const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users', usersServices.getUsers)

router.post('/users', usersServices.createNewUsers)

router.get('/users/:id', usersServices.getOneUsers)

//? Export default : 
module.exports = router