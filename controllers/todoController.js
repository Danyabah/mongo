const todoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.getToDoById = async (req, res) => {
  const { _id } = req.body;
  const todo = await todoModel.findById(_id);
  res.send(todo);
};

module.exports.deleteAllTodo = async (req, res) => {
  todoModel
    .deleteMany()
    .then(() => res.set(201).send("deleted Successfully...."))
    .catch((err) => console.log(err));
};

module.exports.saveToDo = async (req, res) => {
  const { title, description, isDone } = req.body;

  todoModel.create({ title, description, isDone }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, title, description, isDone } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { title, description, isDone })
    .then(() => res.set(201).send("Updated Successfully...."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully...."))
    .catch((err) => console.log(err));
};
