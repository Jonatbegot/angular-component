import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'My TODO list';
  }

}
