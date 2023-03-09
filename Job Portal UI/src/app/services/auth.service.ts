import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = "https://localhost:7188/";

var loginStatus:boolean = false;
var AdminloginStatus:boolean = false;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  

  login(loginInfo:Array<string>) {
    return this.http.post
    ("https://localhost:7188/api/users/LoginUser",{
      Email:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text'
    }    
    ); 
     
    
  }  

  register(body: any) {
    return this.http.post(`https://localhost:7188/api/users`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  

  logout() {
    
    loginStatus=false;
  }

  isLoggedin() {
   return loginStatus;
    
  }

  isAdmin() {
    return AdminloginStatus;
    
  }

  getUser(userId: any) {
    return this.http.get(`https://localhost:7188/api/users/${userId}`, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  getAllUser() {
    return this.http.get(`https://localhost:7188/api/users`);
  }

  updateUser(body: any, userId: Number) {
    return this.http.put(`${url}/user/${userId}`, body, {
      observe: 'body',
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        
    });
  }

  updateUserPassword(body: any, userId: any) {
    return this.http.put(`${url}/user/reset-password/${userId}`, body, {
      observe: 'body',
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        
    });
  }

  deleteUser(UserId: number) {
    return this.http.delete(`https://localhost:7188/api/users/${UserId}`, {
      observe: 'body',
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
       
    });
  }
}
