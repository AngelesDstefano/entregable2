const { getAllUsers, getUsersById, createUsers } = require('./users.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUsers = (req, res) => {
    const id = req.params.id
    const data = getUsersById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}

const createNewUsers = (req, res) => {
    const { title } = req.body

    if(title){
        const data = createUsers(title)
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

module.exports = {
    getUsers,
    getOneUsers,
    createNewUsers
}