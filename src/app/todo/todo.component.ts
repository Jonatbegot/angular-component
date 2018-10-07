import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TodoService } from '../common/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterViewInit, AfterViewChecked {

  // todo à afficher
  @Input()
  todo: any;

  // checkbox du todo
  isChecked: boolean;

  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
     console.log(`TodoComponent : ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`TodoComponent : ngAfterViewChecked`);
  }

  /**
   * Supprime un todo
   */
  delete() {
    this.service.delete(this.todo);
  }

  /**
   * Coche/décoche un todo
   * @param isChecked true si checké sinon false
   */
  check(isChecked) {
    this.isChecked = isChecked;
  }


}
