import { Component } from '@angular/core';
import { TodoListService } from '../../services/todo.service';
import { TodoList } from '../../models/todolist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent {

  public lists: TodoList[] = [];
  public isShowList = false;
  public busy = false;

  public selectedList = {} as TodoList;

  constructor(private listService: TodoListService) {
    this.busy = true;

    this.listService.getLists().subscribe({
      next: lists => {
        this.lists = lists;

        if (this.lists[0] !== null)
          this.selectList(this.lists[0]);

        this.busy = false;
      }
      , error: err => { console.log(err); }
    });
  }

  showLists() {
    this.isShowList = !this.isShowList;
  }

  selectList(list: TodoList) {
    this.busy = true;
    this.listService.getList(list).subscribe({
      next: list => { this.selectedList = list; this.busy = false; }
      , error: err => { console.log(err) }
    })

    this.isShowList = false;
  }
}