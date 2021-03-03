import { Component, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  list: Task[];
}
