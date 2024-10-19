import mongoose from "mongoose";
const { Schema, model } = mongoose

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateRealice: {
    type: Date
  },
  check: {
    type: Boolean,
    default: false
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: "List",
    require: true
  }
})

taskSchema.pre("save", function(next) {
  if(this.check && !this.dateRealice) {
    this.dateRealice = new Date()
  }
  next()
})

const Task = model("Task", taskSchema)

export {
  Task
}

// taskSchema.pre('updateOne', function(next) {
//   const update = this.getUpdate();
//   if (update.check === true) {
//     update.dateRealice = new Date()
//   }
//   next();
// });