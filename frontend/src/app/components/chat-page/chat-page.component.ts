import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  users: { id: number; name: string; color: string }[] = [
    { id: 1, name: 'Rafael Sanches', color: 'chatlab-pink' },
    { id: 2, name: 'Fernanda Linhares', color: 'chatlab-red' },
    { id: 3, name: 'Fabiola Pinho', color: 'chatlab-yellow' },
    { id: 4, name: 'José Francisco', color: 'chatlab-light-blue' },
    { id: 5, name: 'Isaque Scheidt', color: 'chatlab-light-green' },
    { id: 6, name: 'Icaro Andrade', color: 'chatlab-purple' },
  ];
  messages: { content: string; id: number }[] = [
    { content: 'Fala povo!', id: 2 },
  ];

  constructor(
    private chatService: ChatService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit(): void {
    this.chatService.messageReceived.subscribe((message) => {
      this.messages.push(message);
    });

    this.connectionService.connectionObservable.subscribe((user) =>
      this.users.push(user)
    );
  }

  logout() {
    this.connectionService.logout();
  }
}
