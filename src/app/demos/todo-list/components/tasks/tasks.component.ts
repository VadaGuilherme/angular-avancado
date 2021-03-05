import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit, OnDestroy {

  todoList$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }
  ngOnInit() {
    this.todoList$ = this.store.getTodoList().pipe(map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle(event: any) {
    this.taskService.toggle(event);
  }
}
