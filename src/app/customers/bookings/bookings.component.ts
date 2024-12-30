import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  constructor(private fb: FormBuilder, private auth: AuthService){}
  customers: any;
  cust_name: any;
  curr_cust_name: any;
  custid: any;
  todays_date: any;
  bookingForm: FormGroup =  new FormGroup({});

  setId(e: any){
    let curr_cust_name = this.bookingForm.get('customername')?.value;
    for(let i = 0; i<this.customers.length; i++){
      if(this.customers[i].fname == curr_cust_name){
        this.custid = this.customers[i].id;
      }
    }
  }
  ngOnInit(): void {
    this.auth.getAllCustomers().subscribe(res=>{
      this.customers = res;
      for(let i = 0; i<this.customers.length; i++){
        this.cust_name = this.customers[i].fname;
      }
    });
    this.todays_date = new Date().toLocaleDateString();

    //form

    this.bookingForm = this.fb.group({
      'customername': new FormControl(''),
      'custid': new FormControl(''),
      'functionname': new FormControl(''),
      'facilities': new FormControl(''),
      'bookingdate': new FormControl(''),
      'functiondate': new FormControl(''),
      'totalamount': new FormControl(''),
      'amountpaid': new FormControl(''),
      'remainingamount': new FormControl(''),
      'paidstatus': new FormControl(''),
    });
  }
  //facilities
  facilities = [
    {"name": "Drone Camera"},
    {"name": "Normal Camera"},
    {"name": "Candid Pictures"},
    {"name": "Reels & Short videos"},
    {"name": "Lightings"},
    {"name": "DJ"},
  ];
  receptions = [
    {"name": "Wedding Shoots"},
    {"name": "Engagement"},
    {"name": "Haldi"},
    {"name": "Birthday"},
    {"name": "anniversary"},
    {"name": "Pre Wedding Shoots"}
  ]
  //functions
  rA = 0;
  remainAmount(e: any){
    let ta = Number(this.bookingForm.get("totalamount")?.value);
    let pa = Number(this.bookingForm.get("amountpaid")?.value);
    this.rA = Number(ta) - Number(pa);
  }
  msg = "";
  isTrue = "";
  CreateBooking(){
    let customername = this.bookingForm.get("customername")?.value;
    let functionname = this.bookingForm.get("functionname")?.value;
    let totalamount = Number(this.bookingForm.get("totalamount")?.value);
    let amountpaid = Number(this.bookingForm.get("amountpaid")?.value);
    let remainamount = Number(this.bookingForm.get("remainingamount")?.value);
    if(customername.trim().length == 0){
      this.msg = "Customer name can't be empty";
      this.isTrue = 'fail';
    }
    else if(functionname.trim().length == 0){
      this.msg = "Reception Name is required field...!";
      this.isTrue = 'fail';
    }
    else if(amountpaid > totalamount){
      this.msg = "Paid amount can't be greater than total amount"
      this.isTrue = "fail";
    }
    else if(remainamount > totalamount){
      this.msg = "Remaining amount can't be greater than the total amount";
      this.isTrue = "fail";
    }
    else{
      this.auth.createBooking(this.bookingForm.value).subscribe(res=>{
        console.log("Created...!");
        this.msg = "Booking created successfully...!";
        this.isTrue = "pass";
      });
    }
  }
}
