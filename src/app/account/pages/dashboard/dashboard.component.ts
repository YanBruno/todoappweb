import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Security } from 'src/app/core/utils/security.itul';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    this.user = Security.getUser();
  }

  public user = {} as User | null;
}
