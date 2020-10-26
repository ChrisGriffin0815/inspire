import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

function _drawTodos() {
  let template = ""
  let count = ProxyState.todos.length
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById("todoCount").innerText = count.toString()
  document.getElementById("todo").innerHTML = template
}

export default class TodoController {
  constructor() {
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error);
    }
  }
  addTodo(e) {
    e.preventDefault()
    let form = e.target
    let newTodo = {
      description: form.description.value
    }
    todoService.addTodo(newTodo)
    form.reset()
  }

  toggleStatus(Id) {
    todoService.toggleStatus(Id)
  }

  delete(Id) {
    todoService.delete(Id)
  }
}