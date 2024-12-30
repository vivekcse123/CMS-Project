import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}
  signUpForm : FormGroup = new FormGroup({});
   ngOnInit(): void {
     this.signUpForm = this.fb.group({
      'fname': new FormControl(''),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'cpassword': new FormControl('', [Validators.required]),
      'token': new FormControl('')
     });
     sessionStorage.setItem("loggedIn", "false");
   }
   err_msg = "";
   isTrue = "";
   time: any;
   count: number = 3;
   SignUp(){
    let fname = this.signUpForm.get('fname')?.value;
    let email = this.signUpForm.get('email')?.value;
    let password = this.signUpForm.get('password')?.value;
    let cpassword = this.signUpForm.get('cpassword')?.value;
    let token = this.signUpForm.get('token')?.value;
    const d = new Date();
    console.log(fname.split(' ').slice(-1)+d.getFullYear());
    if(fname.trim().length == 0){
      this.err_msg = "Name can't be empty...!";
      this.isTrue = 'fail';
    }
    else if(email.trim().length == 0){
      this.err_msg = "Email can't be empty...!";
      this.isTrue = 'fail';
    }
    else if(password.trim().length == 0){
      this.err_msg = "Password can't be empty";
      this.isTrue = 'fail';
    }
    else if(cpassword.trim().length == 0){
      this.err_msg = "Confirm password is required...!";
      this.isTrue = 'fail';
    }
    else if(password !== cpassword){
      this.err_msg = "Password and confirm password are not matched...!";
      this.isTrue = 'fail';
    }
    else if(token.trim().length == 0){
      this.err_msg = "Token is required field....!";
      this.isTrue = 'fail';
    }
    else if(token != fname.split(' ').slice(-1)+d.getFullYear()){
      this.err_msg = "Invalid token...!";
      this.isTrue = 'fail';
    }
    else{
      this.auth.signUp(this.signUpForm.value).subscribe(res=>{
        this.isTrue = 'pass';
        this.err_msg = "User has been created successfully...!";
        setTimeout(()=>{
          this.router.navigate(['/auth/login']);
        }, 3000);

        setInterval(()=>{
          this.count--;
          this.err_msg = "Page will redirect to login  page after " + this.count + " seconds";
        }, 1000);
      });
    }
   }
}
