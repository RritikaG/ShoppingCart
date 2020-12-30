import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {ItemserviceService} from '../itemservice.service';
import {Details} from '../Details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  details = Details;
  items;
  category;
  pname;
  showcarousal: boolean;
  constructor(private router: Router, private service: AppService, private http: ItemserviceService) { }
  userdata;
  rolecondition;
  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getdetails().subscribe((data) => {
      this.items = data;
      this.showcarousal = true;
    });
    this.http.getuserdetails().subscribe((data) => {
      this.userdata = data;
      if (this.userdata.role === 'admin') {
        this.rolecondition = true;
      }
      console.log(this.userdata.role);
    });
  }

  deleteproduct(id) {
    this.http.deleteitem(id).subscribe((data) => {
      this.http.getdetails().subscribe((data1) => {
        this.items = data1;
      });
    });
  }
  goToDetails(id: number) {
    this.router.navigate(['/productDetails'], { queryParams: { id}});
  }

  showhome() {
    this.category = null;
    this.http.getdetails().subscribe((data2) => {
      this.items = data2;
    });
  }
  searchname() {
    console.log(this.pname);
    this.http.searchproduct(this.pname).subscribe((data) => {
      this.items = data;
      this.showcarousal = false;
    });
  }

  showglasses() {
    this.category = 'glasses';
    this.http.getcategory('glasses').subscribe((data3) => {
      this.items = data3;
    });
  }

  showbooks() {
    this.category = 'book';
    this.http.getcategory('book').subscribe((data4) => {
      this.items = data4;
    });
  }

  showshoes() {
    this.category = 'shoes';
    this.http.getcategory('shoes').subscribe((data5) => {
      this.items = data5;
    });
  }

  showclothes() {
    this.category = 'clothing';
    this.http.getcategory('clothing').subscribe((data6) => {
      this.items = data6;
    });
  }

  handleSelectedevent($even, number1, number2) {
    if (this.category == null) {
      this.http.getpricebtw(number1 , number2).subscribe((data) => {
        this.items = data;
      });
    } else {
      this.http.getpricebtwandcategory(number1 , number2, this.category).subscribe((data) => {
        this.items = data;
      });
    }
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }

}
