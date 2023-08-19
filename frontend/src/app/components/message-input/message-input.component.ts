import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent {
  newMessage: string = '';
  messages: { content: string }[] = [];

  constructor(
    private chatService: ChatService,
    private connectionService: ConnectionService
  ) {}

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage({
        id: this.connectionService.getUser().id,
        from: this.connectionService.getUser().username,
        message: this.newMessage,
      });
      this.newMessage = '';
    }
  }
}
