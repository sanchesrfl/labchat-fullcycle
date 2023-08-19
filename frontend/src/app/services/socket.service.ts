import { EventEmitter, Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { colors } from 'src/utils/colors';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  stompClient = new RxStomp();

  connectionObservable: EventEmitter<
    [
      {
        username: string;
      }
    ]
  > = new EventEmitter();

  messageObservable: EventEmitter<{
    id: number;
    from: string;
    message: string;
  }> = new EventEmitter();

  constructor() {
    this.stompClient.configure({
      brokerURL: 'ws://localhost:8080/gs-guide-websocket',
    });
    this.stompClient.activate();
    this.stompClient.watch('/topic/greetings').subscribe((data) => {
      this.chatMessageHandler(data.body);
    });
    this.stompClient.watch('/topic/user-list').subscribe((data) => {
      this.updateListHandler(data.body);
    });
    this.stompClient.watch('/topic/user-connected').subscribe((data) => {
      this.userConnectedHandler(data.body);
    });
  }

  sendUserConnectionMessage(user: string) {
    this.stompClient.publish({
      destination: '/app/user-connected',
      body: user,
    });
  }

  sendChatMessage(message: { id: number; from: string; message: string }) {
    this.stompClient.publish({
      destination: '/app/chat',
      body: JSON.stringify(message),
    });
  }

  userConnectedHandler(data: string) {
    const user = JSON.parse(data);

    if (!localStorage.getItem('labchat_user_connected'))
      localStorage.setItem('labchat_user_connected', data);
    // this.connectionObservable.emit(users);
  }

  updateListHandler(data: string) {
    const users = JSON.parse(data);
    console.log(users);

    this.connectionObservable.emit(users);
  }

  chatMessageHandler(data: string) {
    const message = JSON.parse(data);

    this.messageObservable.emit(message);
  }
}
