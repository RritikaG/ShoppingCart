import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private httpClient: HttpClient) {
  }

  getdetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/api/showitems', {headers});
  }
  getcategory(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/api/find-by-category/' + type, { headers});
  }
  getpricebtw(number1 , number2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/api/find-by-price/' + number1 + '/' + number2, {headers});
  }
  getpricebtwandcategory(number1 , number2, category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get('http://localhost:2020/api/find-by-price-and-category/' + number1 + '/' + number2 + '/' + category, {headers});
  }
  goToDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/api/find-by-id/' + id, {headers});
  }
  additem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/addproduct/receive/' + id, {headers});
  }
  deleteitem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.delete('http://localhost:2020/api/delete-item/' + id, {headers});
  }
  getmycartitems() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/showcart/receive/', {headers});
  }
  removefromcart(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/removefromcart/receive/' + productId, {headers});
  }
  increasequantity(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/increasequantity/' + productId, {headers});
  }
  decreasequantity(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/decreasequantity/' + productId, {headers});
  }

  emptycart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/clearcart/recieve/', {headers});
  }
  getmyorderhistory() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/history/showorderhistory/recieve', {headers});
  }
  checkout() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/cart/checkout/recieve/', {headers});
  }


  updateprofile( data, id) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:2020/users/updateuser/' + id , data , {headers});
  }
  getuserdetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/users/getuserdetails', {headers});
  }
  addnewproduct(data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:2020/api/addnewitem', data, {headers});
  }
  updateproduct(id, data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:2020/api/updateitem/' + id , data, {headers});
  }
  searchproduct(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:2020/api/find-by-name/' + type, { headers});
  }
}

