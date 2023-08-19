import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  connect() {
    const username = this.loginForm.get('username')?.value;
    if (username) {
      this.connectionService.connect(username);
      this.router.navigate(['/chat']);
    }
  }
}
