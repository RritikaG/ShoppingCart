import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email;
  password;
  username;
  constructor(private service: AuthenticateService) {
  }

  ngOnInit() {
  }

  signupfuc() {
    // tslint:disable-next-line:no-non-null-assertion triple-equals
    if (this.email != undefined && this.username != undefined && this.password != undefined) {
      const data = {
        email: this.email,
        username: this.username,
        password: this.password
      };
      this.service.sendnewuser(data);
    } else {
      alert('Invalid Credentials');
    }
  }
}
