import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
 
  ngOnInit(){

  }
  // goToNavPage(e,navUrl: string) {
  //   this.stopPropagation(e);
  //   this.router.navigateByUrl(navUrl);
  //   // console.log("navUrl",navUrl);
  // }

  // stopPropagation(e) { 
  //   e = e || window.event; 
  //   if(e.stopPropagation) { 
  //       e.stopPropagation(); 
  //   } else { 
  //       e.cancelBubble = true; 
  //   } 
  // }

}
