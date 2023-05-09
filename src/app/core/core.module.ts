import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotfoundPageComponent,
    NavbarComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
    , HttpClientModule
    , RouterModule
  ],
  exports: [NavbarComponent, MessageComponent],
})
export class CoreModule { }
