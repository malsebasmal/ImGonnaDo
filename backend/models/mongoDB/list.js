import { List } from "./schemas/list"
import dotenv from "dotenv"
dotenv.config()


const mongoose = require("mongoose")
const URI = process.env.MONGO_URL

const connect = async () => {
  try {
    await mongoose.connect(URI)
    console.log("connect DB")
  } catch (error) {
    console.log(`Error connecting to mongoDB ${error}`)
  }
}

class listModel {
  static async getAll() {
    await connect()

    try {
      const lists = await List.find().populate("task")
      return lists
    } catch (error) {
      console.error(`Error getting all lists ${error.message}`)
    }
  }

  static async getById({ id }) {
    await connect()

    try {
      const list = await List.findById(id).populate("task")
      return list
    } catch (error) {
      console.error(`Error getting one list ${error.message}`)
    }
  }

  static async create({ data }) {
    await connect()

    try {
      const newList = await List.create({...data})
      return newList
    } catch (error) {
      console.error(`Error creating one list ${error.message}`)
    }
  }

  static async delete({ id }) {
    await connect()

    try {
      const deletedList = await List.findByIdAndDelete(id)
      return deletedList
    } catch (error) {
      console.error(`Error deleting one list ${error.message}`)
    }
  }

  static async update({ id, data }) {
    await connect()

    try {
      const updatedList = await List.findByIdAndUpdate({ id, ...data }, { new: true })
      return updatedList
    } catch (error) {
      console.error(`Error updating one list ${error.message}`)
    }
  }
}

export {
  listModel
}