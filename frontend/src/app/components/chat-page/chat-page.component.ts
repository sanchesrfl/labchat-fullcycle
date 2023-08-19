import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { SocketService } from 'src/app/services/socket.service';
import { colors } from 'src/utils/colors';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  users: { id: number; name: string; color: string }[] = [];
  messages: { id: number; from: string; message: string }[] = [
    { id: 2, from: 'Teste', message: 'Fala povo!' },
  ];

  constructor(
    private connectionService: ConnectionService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.socketService.connectionObservable.subscribe((updatedUsers) => {
      if (this.users.length > 0) {
        const colorId = Math.floor(Math.random() * colors.length);
        const connectedUser = {
          id: updatedUsers.length,
          name: updatedUsers[updatedUsers.length - 1].username,
          color: colors[colorId],
        };
        this.users.push(connectedUser);
        return;
      }
      this.createUsersList(updatedUsers);
    });

    this.socketService.messageObservable.subscribe((message) =>
      this.messages.push(message)
    );
  }

  createUsersList(list: [{ username: string }]) {
    this.users = list.map((user, idx) => {
      const colorId = Math.floor(Math.random() * colors.length);
      return {
        id: idx,
        name: user.username,
        color: colors[colorId],
      };
    });
  }

  logout() {
    this.connectionService.logout();
  }
}
