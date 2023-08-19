import { EventEmitter, Injectable } from '@angular/core';
import { colors } from 'src/utils/colors';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private socketService: SocketService) {}

  connect(username: string) {
    this.socketService.sendUserConnectionMessage(username);
  }

  logout() {
    localStorage.removeItem('labchat_user_connected');
  }

  isConnected() {
    return !!localStorage.getItem('labchat_user_connected');
  }

  getUser(): { id: number; username: string } {
    const user = JSON.parse(localStorage.getItem('labchat_user_connected')!);
    return user;
  }
}
