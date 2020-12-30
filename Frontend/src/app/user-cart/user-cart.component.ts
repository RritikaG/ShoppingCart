import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private service: AppService, private router: Router, private http: ItemserviceService) {
  }

  cart;
  total = 0;

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getmycartitems().subscribe((data) => {
      this.cart = data;
      this.gettotal();
    });
  }

  gettotal() {
    // tslint:disable-next-line:prefer-for-of
    this.total = 0;
    for (let j = 0; j < this.cart.length; j++) {
      this.total = this.total + ((this.cart[j].items.price) * this.cart[j].quantity);
    }
    console.log(this.total);
  }
  deleteitem(productId) {
    this.http.removefromcart(productId).subscribe((data) => {
      this.http.getmycartitems().subscribe((data1) => {
        this.cart = data1;
        this.gettotal();
      });
    });
  }

  incquantity(productId) {
    this.http.increasequantity(productId).subscribe((data) => {
      this.http.getmycartitems().subscribe((data1) => {
        this.cart = data1;
        this.gettotal();
      });
    });
  }

  decquantity(productId) {
    this.http.decreasequantity(productId).subscribe((data) => {
      this.http.getmycartitems().subscribe((data1) => {
        this.cart = data1;
        this.gettotal();
      });
    });
  }

   clearcart() {
    this.http.emptycart().subscribe((data) => {
      this.http.getmycartitems().subscribe((data1) => {
        this.cart = data1;
      });
    });
  }

  checkout() {
    this.http.checkout().subscribe((data) => {
      this.router.navigate(['orderhistory']);
    });
  }
}

