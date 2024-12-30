import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private auth: AuthService){}
  isTrue = "";
  isShow = "hide";
    images = [
      {"path": "assets/images/pic1.jpeg"},
      {"path": "assets/images/pic2.jpeg"},
      {"path": "assets/images/pic3.jpeg"},
      {"path": "assets/images/pic4.jpeg"}]
    videos = [
        {"path": "assets/images/pic4.jpeg"},
        {"path": "assets/images/pic3.jpeg"},
        {"path": "assets/images/pic2.jpeg"},
        {"path": "assets/images/pic1.jpeg"}]
      allnotes: any;
    ngOnInit(): void {
      this.auth.getAllNotes().subscribe(res=>{
        this.allnotes = res;
      });
      console.log(sessionStorage.getItem("isLoggedIn"));
    }
    delete(id: any){
      if(confirm('Are you sure') == false){
        location.reload();
      }
      else{
        this.auth.deleteNotes(id).subscribe(res=>{
          console.log("Deleted..!");
          location.reload();
        });
      }
    }
  }
