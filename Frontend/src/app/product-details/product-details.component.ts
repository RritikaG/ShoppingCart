import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {Details} from '../Details';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId;
  Details;

// details = Details;

  constructor(private activatedRoute: ActivatedRoute, private service: ItemserviceService, private route: Router) {
  }

  // tslint:disable-next-line:max-line-length
  private list: { name: string, price: number, details: string, image: string, category: string, sub_category: string, active: number, itemDetails: string, productId: number };
rolecondition;
userdata;
  ngOnInit() {
    this.service.getdetails().subscribe((data) => {
      this.Details = data;
      this.activatedRoute.queryParams.subscribe(params => {
        this.productId = params.id;
        this.list = this.alldetails(this.productId);
      });
    });
    this.service.getuserdetails().subscribe((data) => {
      this.userdata = data;
      if (this.userdata.role === 'admin') {
        this.rolecondition = true;
      }
    });
  }

  alldetails(productId) {
    for (let i = 0; i < this.Details.length; i++) {
      if (this.Details[i].productId == productId) {
        return this.Details[i];
      }
    }
  }

  addtocart(productId) {
    this.service.additem(productId).subscribe((data) => {
      this.route.navigate(['Mycart']);
    });
     }

  updatethisproduct(productId) {
    this.service.updateproduct(productId, this.list).subscribe((data) => {
    });
  }
}
