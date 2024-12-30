import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  constructor(
    private auth:AuthService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  custId: any;
  curr_cust_id: any;
  allbookigns: any = "";
  cust_booking: Array<any> = [];
  cust_record: any = {};
  adminId: any;
  myMap : any;
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.custId = res['id'];
      //console.log(this.custId);
    });
    this.auth.getCustomerById(this.custId).subscribe(res=>{
      this.cust_record = res;
    });
    this.auth.getAllBookings().subscribe(data=>{
      this.allbookigns = data;
      //console.log(this.allbookigns);
      this.myMap = new Map<String, String>;
      for(let i = 0; i<this.allbookigns.length; i++){
        this.myMap.set(this.allbookigns[i].custid, this.allbookigns[i].customername);
      }
    });
    this.adminId = this.auth.accessAdminId();
  }
  Loaded: boolean = false;
  count = 0;
  isTrue: string = "show";
  Show(id:any){
    this.isTrue = 'show';
    for(let i = 0; i<this.allbookigns.length; i++){
      if(this.myMap.get(this.custId) == this.allbookigns[i].customername){
        console.log(this.allbookigns[i]);
        this.count +=1;
        this.cust_booking.push(this.allbookigns[i]);
        //console.log(this.cust_booking);
      }
    }
    if(this.cust_booking.length == 0){
      alert("No booking found");
    }
    console.log(this.count);
    this.Loaded = true;
  } 
  hide(){
    if(this.isTrue == "show"){
      this.isTrue = 'hide';
    }
    else if(this.isTrue == 'hide'){
      this.isTrue = 'show';
    }
  }

  Back(){
    this.router.navigate(['admin/' + this.adminId + "/dashboard/lists"]);
  }

  deleteBooking(id:any){
    if(confirm("Are you sure?") == false){
      location.reload();
    }
    else{
      this.auth.deleteBooking(id).subscribe(res=>{
        console.log("Booking deleted successfully...!");
        location.reload();
      });
    }
  }
}
