import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  todoList$: Observable<any[]>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.todoList$ = this.taskService.getTodoList$;
  }

}
