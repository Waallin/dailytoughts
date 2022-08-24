import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  async signUp(form:any) {

 
    const res = await this.auth.signUp(form.value)
    if(res.error) {
      console.log('error', res.error.message)
    } else {
        this.router.navigateByUrl('/success')
    }
  } 


  

  ngOnInit(): void {
  }

}
