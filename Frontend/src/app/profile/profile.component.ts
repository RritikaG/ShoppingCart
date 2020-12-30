import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';
import {AuthenticateService} from '../authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username;
  userdata;
  rolecondition;
  constructor(private service: AppService, private router: Router, private http: ItemserviceService, private service1: AuthenticateService){ }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getuserdetails().subscribe((data) => {
      this.userdata = data;
      if (this.userdata.role === 'admin') {
        this.rolecondition = true;
      }
    });
  }
  updateprofile() {
    this.http.updateprofile(this.userdata, this.userdata.userid).subscribe((data) => {
      alert('Profile Updated! LOGIN AGAIN');
      this.service1.logOut();
      this.router.navigate(['userlogin']);
    });
  }
}
