import { Router } from "express";
import { listController } from "../controllers/lists.js"
import { taskController } from "../controllers/tasks.js";
import { listModel } from "../models/mongoDB/list.js"

const listRouter = Router()

const listCtrl = new listController({ listModel })
const taskCtrl = new taskController({ listModel })

listRouter.get("/", listCtrl.getAll)
listRouter.post("/", listCtrl.create)
listRouter.get("/:id", listCtrl.getById)
listRouter.delete("/:id", listCtrl.delete)
listRouter.patch("/:id", listCtrl.update)

listRouter.post("/:id/task", taskCtrl.create)
listRouter.delete("/:id/task/:taskId", taskCtrl.delete)
listRouter.patch("/:id/task/:taskId", taskCtrl.update)

export {
  listRouter
}