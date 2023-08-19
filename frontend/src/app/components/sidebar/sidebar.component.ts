import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() logoutEmitter: EventEmitter<null> = new EventEmitter();
  @Input() users?: { id: number; name: string; color: string }[];

  logout() {
    this.logoutEmitter.emit();
  }
}
