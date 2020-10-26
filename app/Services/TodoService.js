import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"
import { api } from "../Services/AxiosService.js"

let url = 'chris/todos/'

class TodoService {
  async getTodos() {
    let res = await api.get(url)
    ProxyState.todos = res.data.data.map(rawData => new Todo(rawData))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(todo,)]
    console.log(res)
  }

  async toggleStatus(Id) {
    let todo = ProxyState.todos.find(todo => todo._id == Id)
    todo.completed = todo.completed ? false : true
    let res = await api.put(url + Id, todo);
    this.getTodos()
  }

  async delete(Id) {
    let res = await api.delete(url + Id)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;