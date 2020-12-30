import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})

export class OrderhistoryComponent implements OnInit {

  constructor(private service: AppService, private router: Router, private http: ItemserviceService) { }
orderhistoryitem;
  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getmyorderhistory().subscribe((data) => {
      this.orderhistoryitem = data;
    });
  }

}
