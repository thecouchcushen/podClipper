import axios from 'axios'

// Clips service to perform HTTP requests on the server (GET POST PUT DELETE)

//TODO: Update URL upon deployment
const baseUrl = "http://localhost:3001/api/clips"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then((response) => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((response) => response.data)
}

const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

const clipService = {
    baseUrl,
    getAll,
    create,
    update,
    del
}

export default clipService