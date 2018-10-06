import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'My TODO List';
  }

}
