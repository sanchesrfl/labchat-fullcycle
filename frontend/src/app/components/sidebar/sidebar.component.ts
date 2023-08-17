import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  users: { name: string; color: string }[] = [
    { name: 'Rafael Sanches', color: 'chatlab-pink' },
    { name: 'Fernanda Linhares', color: 'chatlab-red' },
    { name: 'Fabiola Pinho', color: 'chatlab-yellow' },
    { name: 'José Francisco', color: 'chatlab-light-blue' },
    { name: 'Isaque Scheidt', color: 'chatlab-light-green' },
    { name: 'Icaro Andrade', color: 'chatlab-purple' },
  ];

  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.connectionService.connectionObservable.subscribe((user) => {
      this.users.push(user);
    });
  }
}
