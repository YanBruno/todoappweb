import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todoitem.model';
import { TodoListService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  public busy = false;
  @Input() todoItem = {} as TodoItem
  @Output() onEditTodoItem = new EventEmitter<TodoItem>();
  @Output() onDeleteTodoItem = new EventEmitter<TodoItem>();

  constructor(private todoService: TodoListService) {


  }

  onEdit() {
    // this.busy = true;
    // this.todoService.(this.todoItem).subscribe({
    //   next: () => {
    //     this.onDeleteTodoItem.emit(this.todoItem);
    //     this.busy = false;
    //   }
    //   , error: err => { console.log(err); }
    // });
  }

  onDelete() {
    this.busy = true;
    this.todoService.deleteTodoItem(this.todoItem).subscribe({
      next: () => {
        this.onDeleteTodoItem.emit(this.todoItem);
        this.busy = false;
      }
      , error: err => { console.log(err); }
    });
  }
}
