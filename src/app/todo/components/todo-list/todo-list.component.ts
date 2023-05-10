import { Component, Input } from '@angular/core';
import { TodoList } from '../../models/todolist.model';
import { TodoItem } from '../../models/todoitem.model';
import { TodoListService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  @Input() listItem: TodoList | null = null;

  constructor(private todoService: TodoListService) {

  }

  deleteTodoItem(todoItem: TodoItem) {
    const idx = this.listItem?.todos.indexOf(todoItem);
    if (idx !== -1)
      this.listItem?.todos.splice(idx!, 1);
  }
}
