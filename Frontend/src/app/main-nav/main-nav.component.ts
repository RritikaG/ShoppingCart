import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  constructor(private router: Router, private service: AppService, private http: ItemserviceService) { }
  userdata: any;
  signup;
  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
      this.signup = false;
    }
    this.http.getuserdetails().subscribe((data) => {
      this.userdata = data;
    });
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }
  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['user-cart']);
    }
  }
}
