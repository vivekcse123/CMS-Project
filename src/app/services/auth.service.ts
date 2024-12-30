import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = "http://localhost:3000/admins";
  customersurl = "http://localhost:3000/customers";
  bookingUrl = "http://localhost:3000/booking";
  notesUrl = "http://localhost:3000/notes";

  adminId: any;
  constructor(private http: HttpClient) { }

  signUp(obj: any){
    return this.http.post(this.baseURL+ "/", obj);
  }

  getAllData(){
    return this.http.get(this.baseURL);
  }

  createCustomers(obj: any){
    return this.http.post(this.customersurl + "/", obj);
  }

  getAllCustomers(){
    return this.http.get(this.customersurl);
  }

  createBooking(obj: any){
    return this.http.post(this.bookingUrl + "/", obj);
  }
  getAllBookings(){
    return this.http.get(this.bookingUrl);
  }

  addNotes(obj: any){
    return this.http.post(this.notesUrl + "/", obj);
  }

  getAllNotes(){
    return this.http.get(this.notesUrl);
  }

  DeleteCustomer(id: any){
    return this.http.delete(this.customersurl + "/" + id);
  }

  getBookingById(name: any){
      return this.http.get(this.bookingUrl + "/", name);
  }

  deleteNotes(id: any){
    return this.http.delete(this.notesUrl + "/" + id);
  }

  getCustomerById(id:any){
    return this.http.get(this.customersurl+"/"+id);
  }

  updateCustoer(id: any, obj: any){
    return this.http.put(this.customersurl + "/" + id , obj);
  }

  accessAdminId(){
    return this.adminId;
  }

  setAdminId(adminId: any) {
    this.adminId = adminId;
    //console.log(this.adminId);
  }

  isLoggedIn(){
    return true;
  }

  deleteBooking(id:any){
    return this.http.delete(this.bookingUrl + "/" + id);
  }

  getAdminById(id:any){
    return this.http.get(this.baseURL + "/" + id);
  }
}
