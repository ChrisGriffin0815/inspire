import { ProxyState } from "../AppState.js"

export default class Todo {
  constructor({ _id, description, completed }) {
    this._id = _id,
      this.description = description,
      this.completed = completed
  }

  get Template() {
    if (this.completed) {
      return /*html*/ `
      <div class="row"> 
      <div class="col-2">
          <button class=" inline align-right btn btn-sm btn-link text-success" onclick="app.todoController.toggleStatus('${this._id}')"><i class="fa fa-check-circle" aria-hidden="true"></i></button>
      </div> 
      <div class="col-8">
          <h4 class="line-through">${this.description}</h4>
      </div>
      <div class="col-2 float right">
          <button class="inline align-right btn btn-sm btn-link text-danger" onclick="app.todoController.delete('${this._id}')"><i class="fa fa-trash" aria-hidden="true"></i></button>    
      </div>    
  </div>    
    `} else {
      return /*html*/ `
      <div class="row"> 
      <div class="col-2">
          <button class=" inline align-right btn btn-sm btn-link text-success" onclick="app.todoController.toggleStatus('${this._id}')"><i class="fa fa-check-circle" aria-hidden="true"></i></button>
      </div> 
      <div class="col-8">
          <h4>${this.description}</h4>
      </div>
      <div class="col-2 float right">
          <button class="inline align-right btn btn-sm btn-link text-danger" onclick="app.todoController.delete('${this._id}')"><i class="fa fa-trash" aria-hidden="true"></i></button>    
      </div>    
  </div>    
      `
    }
  }
}