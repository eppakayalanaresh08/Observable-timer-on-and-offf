import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  homeData: any;

  constructor(private authService: TestService, private http: HttpClient) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.http.get('https://api.example.com/home').subscribe(
        (data) => {
          this.homeData = data;
        },
        (error) => {
          console.error('Failed to fetch home data', error);
        }
      );
    }
  }
  // mobiles=this.ts.mobiles
}
