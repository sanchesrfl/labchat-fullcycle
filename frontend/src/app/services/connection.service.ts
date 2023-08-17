import { EventEmitter, Injectable } from '@angular/core';
import { colors } from 'src/utils/colors';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  connectionObservable: EventEmitter<{ name: string; color: string }> =
    new EventEmitter();

  constructor() {
    setTimeout(() => {
      this.userConnected({ username: 'Geovani Andrade' });
    }, 5000);
  }

  connect(username: string) {
    localStorage.setItem('labchat_user_connected', username);
  }

  isConnected() {
    return !!localStorage.getItem('labchat_user_connected');
  }

  userConnected(user: { username: string }) {
    const colorId = Math.floor(Math.random() * colors.length);
    this.connectionObservable.emit({
      name: user.username,
      color: colors[colorId],
    });
  }
}
