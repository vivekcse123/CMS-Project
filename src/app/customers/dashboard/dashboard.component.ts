import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private auth: AuthService, private activatedrouter: ActivatedRoute, private fb: FormBuilder, private router: Router){}
  adminDetails: any;
  custDetails: any;
  custId: any;
  adminId: any;
  isAdminLoggedIn : boolean = false;
  lid: any;
  name: String = "";
  count = 2;
  myMap: any;
  searchFrom:FormGroup = new FormGroup({});
  ngOnInit(): void {
  this.activatedrouter.params.subscribe(data=>{
    this.adminId = data['id'];
    //console.log(this.adminId);
  });

  this.auth.getAllData().subscribe(res=>{
    this.adminDetails = res;
    for(let i = 0; i<this.adminDetails.length; i++){
      if(this.adminId === this.adminDetails[i].id){
        this.name = this.adminDetails[i].fname;
      }
    }
  });
   this.auth.getAllCustomers().subscribe(res=>{
    this.custDetails = res;
    //very important....
    this.myMap = new Map<string, String>();
    for(let i = 0; i<this.custDetails.length; i++){
      this.myMap.set(this.custDetails[i].fname, this.custDetails[i].id);
    }
    //console.log(this.myMap);
   });

  this.searchFrom = this.fb.group({
    'inputvalue': new FormControl('')
  });
  this.isAdminLoggedIn = true;
  this.auth.setAdminId(this.adminId);
  
}
isOpen:boolean = false;
isUp = "pi pi-angle-up";
Show(){
  if(this.isOpen == false){
    this.isOpen = true;
    this.isUp = "pi pi-angle-down";
  }
  else if(this.isOpen == true){
    this.isOpen = false;
    this.isUp = "pi pi-angle-up";
  }
}

custid: any;
onSubmit():void{
  let data = this.searchFrom.get('inputvalue')?.value;
  if(this.myMap.get(data)!= null){
    this.custId = this.myMap.get(data);
    //console.log(this.custId);
    this.router.navigate(["admin/" + this.adminId + "/dashboard/lists/view/" + this.custId]);
  }
  else{
    alert("Customer not found");
    this.router.navigate(["admin/" + this.adminId + "/dashboard/lists"]);
  }
}
}