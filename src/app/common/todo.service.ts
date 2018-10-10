import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // déclaration du tableau todos de type Todo
  todos: Todo[];

  constructor() {
    // Si la clé n'éxiste "todos" pas dans le local storage
    if (!localStorage.todos) {
      console.log('if');
      // Initialisation du local storage et du tableau todos
      this.saveToLocalStorage([]);
      this.todos = [];

    } else {
      console.log('else');
      // Si la clé "todos" existe récupération des donnée en conversion
      // en objet javascript (json)
      const data = JSON.parse(localStorage.todos);

      // converte data to Todo model
      this.todos = data.map(x => {
        const todo = new Todo();
        todo.id = x.id;
        todo.message = x.message;
        return todo;
      });
    }
  }

  /**
   * Retourn la liste des Todos
   */
  get(): Todo[] {
    return this.todos;
  }

  /**
   * Sauvegarde une tache
   * @param todo
   */
  add(todo: Todo) {
    todo.id = this.todos.length.toString();
    this.todos.push(todo);
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

  /**
   * Mise à jour du local storage avec la liste "todos"
   * @param products
   */
  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('todos', data);
  }
}
