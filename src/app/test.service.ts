import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  // mobiles=["Mi","relame","redmi","iphone"]

  private apiUrl = 'https://api.example.com/auth'; // Example API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated (you can implement your own logic)
    // For simplicity, assume authentication is always successful
    return true;
  }

  // users=[
  //   {
  //     "id":1 ,
  //     "name":"Leanna Graham",
  //     "emial":"eppakaahy"

      
  //   },
  //   {
  //     "id":2 ,
  //     "name":"Nani Graham",
  //     "emial":"Nari"

      
  //   },
  //   {
  //     "id":3 ,
  //     "name":"Rakesh Graham",
  //     "emial":"Rakhi"

      
  //   },
  //   {
  //     "id":4 ,
  //     "name":"Naveen Graham",
  //     "emial":"Naveen"

      
  //   },
  // ]
}
