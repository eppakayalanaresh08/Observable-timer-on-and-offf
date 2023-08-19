import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TestService } from '../test.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""
  constructor(private authService: TestService, private router: Router) {}


  login(): void {
    // Simulating login process
    this.authService.login('username', 'password').subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

}
