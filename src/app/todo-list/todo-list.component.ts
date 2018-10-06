import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit value of name ${this.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges value of changes ${changes['name'].currentValue}`);
  }

}
