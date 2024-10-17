import mongoose from "mongoose";
const { Schema, model } = mongoose

const listSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  limitNumber: {
    type: Number,
    validate: {
      validator: Number.isInteger
    },
    min: 0,
    max: 500
  },
  task: [{
    type: Schema.Types.ObjectId,
    ref: "Task"
  }]
})

const List = model("List", listSchema)

export {
  List
}