import { Component, OnInit, OnChanges, SimpleChanges, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, ContentChild, Query } from '@angular/core';
import { TodoService } from '../common/todo.service';
import { TodoComponent } from '../todo/todo.component';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { Todo } from '../common/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  // liste des todos à afficher
  todos: any[];
  // todo à créer
  todo: Todo = new Todo();
  // checkbox général
  isAllCheked = false;
  // nombre de toto checké
  nbChecked = 0;
  // composants enfant <app-todo>
  @ViewChildren(TodoComponent) todoComponents: QueryList<TodoComponent>;
  // composant enfant <app-todo-header>
  @ContentChild(TodoHeaderComponent) todoHeaderComponent: TodoHeaderComponent;

  constructor(private service: TodoService) { }

  ngOnInit() {
    console.log(`TodoListComponent : ngOnInit`);
    this.todos = this.service.get();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`TodoListComponent : ngOnChanges value of changes ${changes['name'].currentValue}`);
  }

  ngAfterContentInit(): void {
    console.log(`TodoListComponent: ngAfterContentInit, this.todoComponents is ${this.todoComponents}`);
    console.log(`TodoListComponent: ngAfterContentInit, this.todoHeaderComponent is ${this.todoHeaderComponent}`);
  }

  ngAfterContentChecked(): void {
    console.log(`TodoListComponent: ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`TodoListComponent : ngAfterViewInit, todoComponents length : ${this.todoComponents.length}`);
    console.log(`TodoListComponent: ngAfterViewInit, this.todoHeaderComponent is ${this.todoHeaderComponent}`);
  }

  ngAfterViewChecked(): void {
    console.log(`TodoListComponent: ngAfterViewChecked, todoComponents length : ${this.todoComponents.length}`);
  }

  /**
   * Ajout d'un élément à la todo list
   */
  add() {
    this.service.add(this.todo);
    this.todo = new Todo();
  }

  /**
   * Coche/décoche les checkbox des composant TodoComponent enfant
   */
  checkAll() {
    this.todoComponents.forEach(todo => todo.check(this.isAllCheked));
  }

  /**
   * Supprime les composants TodoComponent enfant coché
   */
  deleteChecked() {
    this.todoComponents.forEach(todo => {
      if (todo.isChecked) {
        todo.delete();
      }
    });
    this.isAllCheked = false;
  }

  /**
   * Incrément/décrémente le nombre de todo checké ou non
   * @param $event
   */
  displayChecked($event) {
    console.log('event successfuly received');
    if ($event) {
      this.nbChecked++;
    } else {
      this.nbChecked--;
    }

    if (this.nbChecked > this.todos.length) {
      this.nbChecked = this.todos.length;
    } else if (this.nbChecked < 0) {
      this.nbChecked = 0;
    }
    // this.nbChecked = this.nbChecked > this.todos.length ? this.todos.length
  }
}
