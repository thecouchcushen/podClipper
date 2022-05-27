import axios from 'axios'

const baseURL = "http://localhost:3001/clips"

const getAll = () => {
    axios.get(baseURL)
}

const create = (newObject) => {
    axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
    axios.put(`${baseURL}/${id}`, newObject)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}