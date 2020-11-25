import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 dara:any =[]
  constructor() { }

  ngOnInit(): void {
   this.dara = JSON.parse(localStorage.getItem('user'))
   console.log(this.dara.email)
  
  }

}
