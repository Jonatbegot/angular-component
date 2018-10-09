import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: any[];

  constructor() {
    if (!localStorage.products) {

      this.saveToLocalStorage([]);
      this.todos = [];

    } else {
      const data = JSON.parse(localStorage.products);
      this.todos = data;
    }
  }

  get() {
      return this.todos;
  }

  /**
   * Sauvegarde une tache
   * @param task
   */
  add(task) {
    task.id = this.todos.length;
    this.todos.push(task);
    this.saveToLocalStorage(this.todos);
  }

  /**
   * Supprime une tache
   * @param todo
   */
  delete(todo) {
    const index = this.todos.findIndex(x => x.id === todo.id);
    this.todos.splice(index, 1);
    this.saveToLocalStorage(this.todos);
  }

  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('todos', data);
  }
}
