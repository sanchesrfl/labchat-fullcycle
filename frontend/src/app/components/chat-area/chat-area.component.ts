import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css'],
})
export class ChatAreaComponent {
  @Input() messages?: { id: number; content: string }[];
  @Input() users?: { id: number; name: string; color: string }[];

  findUser(id: number) {
    if (this.users) {
      const user = this.users.find((user) => user.id === id);
      return user;
    }
    return null;
  }
}
