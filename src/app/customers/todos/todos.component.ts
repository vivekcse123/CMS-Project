import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
constructor(private auth: AuthService, private fb: FormBuilder){}
addFrom: FormGroup = new FormGroup({});
msg:string = "";  
allNotes: any;
ngOnInit(): void {
  this.addFrom = this.fb.group({
    'item': new FormControl('', Validators.required)
  });
  this.auth.getAllNotes().subscribe(res=>{
    this.allNotes = res;
  });
}
clear(){
  let data = document.getElementById("demo");
  console.log(data?.innerHTML);
}
isTure: string = "";
add(){
  let item = this.addFrom.get('item')?.value;
  if(item.trim().length==0){
    this.msg = "Input field can't be empty...!";
    this.isTure = "fail";
  }
  else{
    this.auth.addNotes(this.addFrom.value).subscribe(res=>{
      this.isTure = 'pass';
      this.msg = "Your notes added successfully...!";
      console.log("Added....!");
      this.clear();
    });
  }
}
refresh(){
  location.reload();
}
delete(id:any){
  if(confirm("Are you sure") == false){
  }else{
    this.auth.deleteNotes(id).subscribe(res=>{
      console.log("Deleted successfully...!");
      location.reload();
    });
  }
}
}
