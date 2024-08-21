const db = require('../models');
const Task = db.Task;

// Create a new Task
exports.create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Retrieve all tasks
exports.findAll = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a Task
exports.delete = async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).send({ message: 'Task deleted successfully' });
    } else {
      res.status(404).send({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
