import { List } from "./schemas/list.js"
import { Task } from "./schemas/task.js"
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
    throw error
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
      throw error
    }
  }

  static async getById({ id }) {
    await connect()

    try {
      const list = await List.findById(id).populate("task")
      return list
    } catch (error) {
      console.error(`Error getting one list ${error.message}`)
      throw error
    }
  }

  static async create({ data }) {
    await connect()

    try {
      const newList = await List.create({ data })
      return newList
    } catch (error) {
      console.error(`Error creating one list ${error.message}`)
      throw error
    }
  }

  static async delete({ id }) {
    await connect()

    try {
      const deletedList = await List.findByIdAndDelete(id)
      return deletedList
    } catch (error) {
      console.error(`Error deleting one list ${error.message}`)
      throw error
    }
  }

  static async update({ id, data }) {
    await connect()

    try {
      const updatedList = await List.findByIdAndUpdate({ id, data }, { new: true })
      return updatedList
    } catch (error) {
      console.error(`Error updating one list ${error.message}`)
      throw error
    }
  }

  static async createdTask({ id, data }) {
    await connect()

    try {
      const newTask = await Task.create(data)
      const updatedList = await Task.findByIdAndUpdate(
        id,
        { $push: { task: newTask._id } },
        { new: true }
      ).populate("task")
      return updatedList
    } catch (error) {
      console.error(`Error creating task for list: ${error.message}`)
      throw error
    }
  }

  static async deletedTask({ id, taskId }) {
    await connect()

    try {
      const deletedTask = Task.findByIdAndDelete(taskId)
      await List.findByIdAndUpdate(
        id,
        { $pull: { task: taskId } },
        { new: true }
      ).populate("task")
      return deletedTask
    } catch (error) {
      console.error(`Error deleting task for list: ${error.message}`)
      throw error
    }
  }

  static async updatedTask({ taskId, data }) {
    await connect()

    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { $set: data },
        { new: true }
      )
      return updatedTask
    } catch (error) {
      console.error(`Error updating task for list: ${error.message}`)
      throw error
    }
  }
}

export {
  listModel
}