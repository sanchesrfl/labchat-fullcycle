import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messageSubject = new Subject<{ username: string, content: string, id: number }>();
  messageReceived: Observable<{ username: string, content: string, id: number }> = this.messageSubject.asObservable();

  constructor() { }

  sendMessage( message: { username: string, content: string, id: number }) {
    this.messageSubject.next(message);
  }

}
