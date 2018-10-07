import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: any[] = [];

  constructor() { }

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
  }

  /**
   * Supprime une tache
   * @param todo
   */
  delete(todo) {
    const index = this.todos.findIndex(x => x.id === todo.id);
    this.todos.splice(index, 1);
  }
}
