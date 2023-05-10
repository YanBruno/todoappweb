import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoList } from '../models/todolist.model';
import { Observable, first } from 'rxjs';
import { Security } from 'src/app/core/utils/security.itul';
import { TodoItem } from '../models/todoitem.model';
import { IGenericCommandResult } from 'src/app/core/models/generic-command-result.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private urlBase = environment.base_url;

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = Security.getToken();
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }

  getLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(`${this.urlBase}/v1/TodoList/all`, { headers: this.composeHeaders() }).pipe(first());
  }

  getList(todoList: TodoList): Observable<TodoList> {
    return this.http.get<TodoList>(`${this.urlBase}/v1/TodoList/${todoList.id}`, { headers: this.composeHeaders() }).pipe(first());
  }

  deleteTodoItem(todoItem: TodoItem) {
    return this.http.delete<IGenericCommandResult>(`${this.urlBase}/v1/TodoItem`, { headers: this.composeHeaders(), body: { todoItemId: todoItem.id } }).pipe(first());
  }
}
