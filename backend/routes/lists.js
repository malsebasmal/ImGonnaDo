import { Router } from "express";
import { listController } from "../controllers/lists.js"
import { taskController } from "../controllers/tasks.js";

const listRouter = Router()


listRouter.get("/", listController.getAll)
listRouter.post("/", listController.create)
listRouter.get("/:id", listController.getById)
listRouter.delete("/:id", listController.delete)
listRouter.patch("/id", listController.update)

listRouter.post("/:id/task", taskController.create)
listRouter.delete("/:id/task/:taskId", taskController.delete)
listRouter.patch("/:id/task/:taskId", taskController.update)

export {
  listRouter
}