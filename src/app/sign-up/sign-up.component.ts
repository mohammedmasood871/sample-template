import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

}
