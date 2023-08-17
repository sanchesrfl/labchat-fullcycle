import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {

  messages: { username: string, content: string, id: number } [] = 
  [{ username: 'Ícaro', content: 'Fala povo!', id: 2 }];

  constructor(
    private chatService: ChatService  
  ) { }

  ngOnInit(): void {
    this.chatService.messageReceived.subscribe((message) => {
      this.messages.push(message);
    })
  }


}
