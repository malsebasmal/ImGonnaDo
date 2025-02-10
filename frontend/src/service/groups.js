import axios from "axios"
import { API } from "../fakeApi/api"

const getAll = () => {
  const request= axios.get(API)
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

export { 
  getAll,
  create,
  update
}