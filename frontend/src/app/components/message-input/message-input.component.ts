import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {

  newMessage: string = '';
  messages: { content: string }[] = []; 

  constructor(
    private chatService: ChatService
  ) { }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage({ username: 'User', content: this.newMessage });
      this.newMessage = '';
    }
  }


}
