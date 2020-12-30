import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


export class User {
  constructor(
    public status: string,
  ) { }

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient, private route: Router) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:2020/users/get1', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
        }
      )

    );
  }

  sendnewuser(d) {
    return this.httpClient.post('http://localhost:2020/users/adduser', d).subscribe((data) => {
    this.route.navigate(['/userlogin']);

    }, ( error) => {
      alert('Email Already Exists');
      }
    )
      ;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

logOut() {
    sessionStorage.removeItem('username');
  }
}

