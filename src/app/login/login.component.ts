import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router) {
  }

  async logIn(form:any) {

 
    const res = await this.auth.signIn(form.value)
    if(res.error) {
      console.log('error', res.error.message)
    } else {
      console.log('logged in')
      this.router.navigateByUrl('home');
    }
  } 


  ngOnInit(): void {}

}
