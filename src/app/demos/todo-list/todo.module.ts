import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./todo.component";
import { TasksService } from "./todo.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TasksService
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TasksComponent,
        TodoListComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TasksComponent,
        TodoListComponent
    ]
})

export class TodoModule { }