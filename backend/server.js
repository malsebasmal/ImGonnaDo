import express, { json } from "express"
import cors from "cors"
import { listRouter } from "./routes/lists.js"
import dotenv from "dotenv"
dotenv.config()

const SERVER = express()
const PORT = process.env.PORT ?? 3000

SERVER.use(cors())
SERVER.use(json())

SERVER.use("/lists" ,listRouter)

const serverStart = async () => {
  try {
    SERVER.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(`Error for start the server, ${error}`)
    process.exit(1)
  }
}

serverStart()