import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-customer-lists',
  templateUrl: './customer-lists.component.html',
  styleUrl: './customer-lists.component.css'
})
export class CustomerListsComponent implements OnInit{
  constructor(private auth : AuthService, private router: Router){}
  allCustomers: any;
  custId: any;
  adminId: any;
  ngOnInit(): void {
    this.auth.getAllCustomers().subscribe(res=>{
      this.allCustomers = res;
    });
    this.adminId = this.auth.accessAdminId();
    console.log(this.adminId);
  }

  ViewCustomer(id: any){
    this.router.navigate(['admin/' + this.adminId + "/dashboard/lists/view/" + id]);
  }
}

