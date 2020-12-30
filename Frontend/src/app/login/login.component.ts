import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username;
password;

  constructor(private service: AppService, private router: Router, private authservice: AuthenticateService) { }

  ngOnInit() {}
login() {
    this.authservice.authenticate(this.username, this.password).subscribe(data => {
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    },
    (error) => {
      alert('Invalid Credential');
    }
    );
}
logout() {
    this.service.isLoggedIn(false);
}
}
