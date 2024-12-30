import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit{
  constructor(private auth: AuthService, private fb: FormBuilder, private route: ActivatedRoute){}
  isTrue = "";
  msg = "";
  custid: any;
  custDetails: any;
  editForm: FormGroup = new FormGroup({});
  createddate: any;
  dataLoaded: boolean = true;
  ngOnInit(): void {
    this.dataLoaded = false;
    const currentDate = new Date().toDateString();
    this.createddate = currentDate;
    this.route.params.subscribe(res=>{
      this.custid = res['id'];
      console.log(this.custid);
    });
    if(this.custid !== ''){
      this.auth.getCustomerById(this.custid)
      .toPromise()
      .then(res=>{
        this.custDetails = res;
        console.log(this.custDetails);
        this.editForm = this.fb.group({
          'fname': new FormControl(this.custDetails.fname),
          'email': new FormControl(this.custDetails.email),
          'mobile': new FormControl(this.custDetails.mobile),
          'createddate': new FormControl(this.custDetails.createddate),
          'address': new FormControl(this.custDetails.address) 
        })
        this.dataLoaded = true;
    })
    .catch(err=>{
      console.log(err);
    });
  }
}
updateCustomer(){
  let fname = this.editForm.get('fname')?.value;
  let email = this.editForm.get('email')?.value;
  let mobile = this.editForm.get('mobile')?.value;
  let updateddate = this.editForm.get('createddate')?.value;
  let address = this.editForm.get('address')?.value;

  //regex
  const name_regex = new RegExp("^[a-zA-Z\\s]*$");
  const mobile_regex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
  const email_regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  if(fname.trim().length == 0){
    this.msg = "Name can't be empty";
    this.isTrue = 'fail';
  }
  else if(name_regex.exec(fname) == null){
    this.msg = "Invalid name";
    this.isTrue = 'fail';
  }
  else if(email.trim().length == 0){
    this.msg = "Emil can't be empty";
    this.isTrue = 'fail';
  }
  else if(email_regex.exec(email) == null){
    this.msg = "Invalid email";
    this.isTrue = 'fail';
  }
  else if(mobile.trim().length == 0){
    this.msg = "Mobile can't be empty";
    this.isTrue = 'fail';
  }
  else if(mobile_regex.exec(mobile) == null){
    this.msg = "Invalid mobile";
    this.isTrue = 'fail';
  }
  else if(updateddate.trim().length == 0){
    this.msg = "Updated can't be empty";
    this.isTrue = 'fail';
  }
  else if(address.trim().length == 0){
    this.msg = "Address can't be empty";
    this.isTrue = 'fail';
  }
  else{
  this.auth.updateCustoer(this.custid, this.editForm.value).subscribe(res=>{
    console.log("Updated....!");
    this.msg = "Customer updated successfully...!";
    this.isTrue = 'pass';
  });
 }
}
}