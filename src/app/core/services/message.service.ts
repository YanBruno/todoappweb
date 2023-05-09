import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { IGenericCommandResult } from '../models/generic-command-result.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message = new BehaviorSubject<Message | null>(null);

  hasMessage = this.message.asObservable();

  addMessageFromResult(result: IGenericCommandResult) {

    const m = { title: result.message, notifications: result.data } as Message
    console.log(m);
    this.message.next(m);
  }


  addMessage(message: Message) {
    this.message.next(message);
  }

  clearNotifications() {
    this.message.next(null);
  }

  getMessage(): Message | null {
    return null;
  }
}
