class taskController {
  constructor ({ listModel }){
    this.listModel = listModel
  }

  create = async (req, res) => {
    try {
      const { id } = req.params
      const data = req.body
      const newTask = await this.listModel.createdTask({ id, data })
      res.status(201).json(newTask)
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: `Validation create error: ${error.message}` });
      }
      res.status(500).json({ message: `Error creating task for list: ${error.message}` });
    }
  }

  delete = async (req, res) => {
    try {
      const { id, taskId } = req.params
      const deletedTask = await this.listModel.deletedTask({ id, taskId })
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" })
      }
      return res.status(200).json(deletedTask)
    } catch (error) {
      res.status(500).json({ message: `Error deleting task for list ${error.message}` })
    }
  }

  update = async (req, res) => {
    try {
      const { taskId } = req.params
      const data = req.body
      const updatedTask = await this.listModel.updatedTask({ taskId, data })
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' })
      }
      return res.status(200).json(updatedTask)
    } catch (error) {
      res.status(500).json({ message: `Error updating task for list ${error.message}` })
    }
  }
}

export {
  taskController
}