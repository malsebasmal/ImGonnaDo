class listController {
  constructor ({ listModel }){
    this.listModel = listModel
  }
  
  getAll = async (req, res) => {
    try {
      const lists = await this.listModel.getAll()
      res.json(lists)
    } catch (error) {
      res.status(500).json({ message: `Error retrieving all lists ${error.message}` })
    }
  }

  create = async (req, res) => {
    try {
      const data = req.body
      const newList = await this.listModel.create({ data })
      res.status(201).json(newList)
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: `Validation create error: ${error.message}` });
      }
      res.status(500).json({ message: `Error creating list: ${error.message}` });
    }
  }

  getById = async (req, res) => {
    try {
      const { id } = req.params
      const list = await this.listModel.getById({ id })
      if (!list) {
        return res.status(404).json({ message: `List with ${id} not found` })
      }
      res.json(list)
    } catch (error) {
      res.status(500).json({ message: `Error retrieving one list ${error.message}` })
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params
      const deletedList = await this.listModel.delete({ id })
      if (!deletedList) {
        return res.status(404).json({ message: "List not found" })
      }
      return res.status(200).json(deletedList)
    } catch (error) {
      res.status(500).json({ message: `Error deleting list ${error.message}` })
    }
  }

  update = async (req, res) => {
    try {
      const { id } = req.params
      const data = req.body
      const updatedList = await this.listModel.update({ id, data })
      if (!updatedList) {
        return res.status(404).json({ message: 'List not found' })
      }
      res.status(200).json(updatedList)
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: `Validation update error: ${error.message}` });
      }
      res.status(500).json({ message: `Error update list: ${error.message}` });
    }
  }
}

export {
  listController
}