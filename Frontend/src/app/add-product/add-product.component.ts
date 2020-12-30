import { Component, OnInit } from '@angular/core';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name;
  price;
  description;
  category;
  // tslint:disable-next-line:variable-name
  sub_category;
  image;
  setproduct: boolean;
  constructor(private http: ItemserviceService) { }

  ngOnInit() {
  }
addproduct() {
  const data = {
    name: this.name,
    price: this.price,
    description: this.description,
    category: this.category,
    sub_category: this.sub_category,
    image: this.image
  };
  console.log(data);
  this.setproduct = true;
  this.http.addnewproduct(data).subscribe((data5) => {
  });
}

}
