import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit{
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute){}
  todays_date: any;
  adminRecord: any;
  createFrom: FormGroup = new FormGroup({});
  ngOnInit(): void {
    const currentDate = new Date().toDateString();
    this.todays_date = currentDate;
    console.log(this.todays_date);
    this.createFrom = this.fb.group({
      'fname': new FormControl(''),
      'email': new FormControl(''),
      'mobile': new FormControl(''),
      'createddate': new FormControl(''),
      'address': new FormControl('')
    });
}
msg:String = "";
isTrue = "";
createCustomer(){
  let name = this.createFrom.get('fname')?.value;
  let email = this.createFrom.get('email')?.value;
  let mobile = this.createFrom.get('mobile')?.value;
  let address = this.createFrom.get('address')?.value;

  const name_regex = new RegExp("^[a-zA-Z\\s]*$");
  const mobile_regex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
  const email_regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

  if(name.trim().length == 0){
    this.msg = "Name can't be empty...!";
    this.isTrue = "fail";
  }
  else if(name_regex.exec(name) == null){
    this.msg = "Invalid name";
    this.isTrue = 'fail';
  }
  else if(email.trim().length == 0){
    this.msg = "Email can't be empty...!";
    this.isTrue = "fail";
  }
  else if(email_regex.exec(email) == null){
    this.msg = "Invalid email";
    this.isTrue = 'fail';
  }
  else if(mobile.trim().length == 0){
    this.msg = "Mobile can't be empty...!";
    this.isTrue = "fail";
  }
  else if(mobile_regex.exec(mobile) == null){
    this.msg = "Invalid mobile number";
    this.isTrue = 'fail';
  }
  else if(mobile.length != 10){
    this.msg = "Invalid mobile number...!";
    this.isTrue = "fail";
  }
  else if(address.trim().length == 0){
    this.msg = "Address can't be empty";
    this.isTrue = "fail";
  }
  else{
    this.auth.createCustomers(this.createFrom.value).subscribe(res=>{
      this.msg = "User created successfully....!";
      console.log("Created successfully....!");
      this.isTrue = "pass";
      name = "";
      //his.router.navigate(["admin/" +this.adminId+"/dashboard/create"]);
    });
  }
}
}
