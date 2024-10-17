//missing validations for password

import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
  fullname: String,
  username: String
})