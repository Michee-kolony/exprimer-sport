import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-exprim',
  templateUrl: './exprim.component.html',
  styleUrl: './exprim.component.css'
})
export class ExprimComponent implements OnInit {

  loading = true;

ngOnInit(): void {
  setTimeout(()=>{
   this.loading = false;
  }, 2000);
}


}
