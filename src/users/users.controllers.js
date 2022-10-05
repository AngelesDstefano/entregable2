const uuid = require('uuid')

const usersDB = [
  {
    id: 'b1ffad08-b0e7-4b6a-8b9e-2f42efc168c0',
    title: "Este es un asdkfjbsdljkfb",
    is_completed: false,
  },
  {
    id: '6af2278d-45f5-49bc-8607-8ff2616d3e0b',
    title: "Este es otro titulo",
    is_completed: false,
  },
];

const getAllusers = () => {
    return usersDB
}

const getUsersById = (id) => {

    const data = usersDB.find(task => task.id === id)
    return data
}

const createUsers = (title) => {
    const newUsers = {
        id: uuid.v4(),
        title,
        is_completed: false
    }
    usersDB.push(newUsers)
    return newUsers
}

module.exports = {
    getAllUsers,
    getTodoById,
    createUsers
}