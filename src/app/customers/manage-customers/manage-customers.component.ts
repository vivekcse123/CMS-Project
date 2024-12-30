import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrl: './manage-customers.component.css'
})
export class ManageCustomersComponent implements OnInit{
constructor(private auth: AuthService, private route:ActivatedRoute, private router: Router){}
allCustomers: any;
adminId: any;
custId: any;
ngOnInit(): void {
  this.route.paramMap.subscribe(res=>{
    this.adminId = res.get('id');
    console.log(this.adminId);
  });
  this.auth.getAllCustomers().subscribe(res=>{
    this.allCustomers = res;
  });
};
Delete(id:any){
  console.log(id);
  if(confirm("Are you sure?") == false){
    location.reload();
  }
  else{
    this.auth.DeleteCustomer(id).subscribe(res=>{
      location.reload();
      console.log('Deleted successfully....!');
    });
  }
}
}
