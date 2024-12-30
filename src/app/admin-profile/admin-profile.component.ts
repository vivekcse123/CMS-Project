import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router){}
  adminDetails: any;
  adminId: any;
  ngOnInit(): void {
    this.adminId = this.auth.accessAdminId();
    this.auth.getAdminById(this.adminId).subscribe(res=>{
      this.adminDetails = res;
      console.log(this.adminDetails);
    });
  }
  back(){
    this.router.navigate(["admin/" + this.adminId + "/dashboard/home"]);
  }
}
