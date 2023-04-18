const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  deleteAllTodo,
  getToDoById,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
router.delete("/deleteall", deleteAllTodo);
router.post("/todo", getToDoById);

module.exports = router;
