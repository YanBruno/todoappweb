import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  public message: Message | null = null;

  constructor(public service: MessageService) {
    service.hasMessage.subscribe(
      m => {
        this.message = m
      }
    );
  }

  onClear() {
    this.service.clearNotifications();
  }
}