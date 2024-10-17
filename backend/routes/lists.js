import { Router } from "express";
import { listController } from "../controllers/lists.js"

const listRouter = Router()


listRouter.get("/", listController.getAll)
listRouter.post("/", listController.create)
listRouter.get("/:id", listController.getById)
listRouter.delete("/:id", listController.delete)
listRouter.patch("/", listController.update)

export {
  listRouter
}