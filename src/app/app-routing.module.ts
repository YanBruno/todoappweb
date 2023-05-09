import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './core/pages/notfound-page/notfound-page.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },

  { path: "", loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },

  { path: "todos", canActivate: [authGuard], component: MainPageComponent, loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule) },
  { path: "account", canActivate: [authGuard], component: MainPageComponent, loadChildren: () => import('./account/account.module').then((m) => m.AccountModule) },
  { path: "**", component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
