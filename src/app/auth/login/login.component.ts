import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router){}
  userDetails: any;
  userId: any;
  ngOnInit(): void {
    this.auth.getAllData().subscribe(res=>{
      console.log(res);
      this.userDetails = res;
    });
    sessionStorage.setItem("loggedIn", "false");
  }
  msg: String = "";
  uname: String = "";
  password: String = "";
  isCorrect: String = "";
  Login(){
    if(this.uname.trim().length == 0){
      this.msg = "Username can't be empty...!";
      this.isCorrect = 'no';
    }
    else if(this.password.trim().length == 0){
      this.msg = "Password can't be empty...!";
      this.isCorrect = 'no';
    }
    else{
    for(let i = 0; i<this.userDetails.length; i++){
      if(this.uname === this.userDetails[i].email && this.password === this.userDetails[i].password){
        sessionStorage.setItem("loggedIn", "true");
        this.userId = this.userDetails[i].id;
        this.router.navigate(['admin/' + this.userId + '/dashboard/home']);
        break;
      }
      else{
        sessionStorage.setItem("loggedIn", "false");
        this.msg = "Invalid credentials....!";
        this.isCorrect='no';
      }
    }
    }
  }
}
