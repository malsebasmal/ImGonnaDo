import axios from "axios"
import { API } from "../fakeApi/api"

const getAll = () => {
  const request = axios.get(API)
  return request.then(response => response.data)
}

const getById = (id) => {
  const request = axios.get(`${API}/${id}`)
  return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.get(API, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${API}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${API}/${id}`)
  return request.then(response => response.data)
}

export {
  getAll,
  getById,
  create,
  update,
  remove
}