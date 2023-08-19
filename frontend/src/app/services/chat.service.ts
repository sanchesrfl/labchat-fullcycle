import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // messageSubject = new Subject<{
  //   from: string;
  //   message: string;
  // }>();
  // messageReceived: Observable<{
  //   from: string;
  //   message: string;
  // }> = this.messageSubject.asObservable();

  constructor(private socketService: SocketService) {}

  sendMessage(message: { id: number; from: string; message: string }) {
    this.socketService.sendChatMessage(message);
    // this.messageSubject.next(message);
  }
}
