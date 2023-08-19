import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css'],
})
export class ChatAreaComponent {
  @Input() messages?: { id: number; from: string; message: string }[];
  @Input() users?: { id: number; name: string; color: string }[];
  userId: number;

  constructor(private connectionService: ConnectionService) {
    this.userId = connectionService.getUser().id;
  }

  findUser(id: number) {
    if (this.users) {
      const user = this.users.find((user) => user.id === id);
      return user;
    }
    return null;
  }
}
