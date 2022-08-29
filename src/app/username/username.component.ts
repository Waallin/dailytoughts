import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DbService } from '../services/db.service';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
  
})
export class UsernameComponent implements OnInit {


  private supabase: SupabaseClient;

  username:any = '';
  id:any = '';
  constructor( private auth: AuthService, private db:DbService, private router: Router) { 
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
      );


  }

  ngOnInit(): void {
    this.userId()
  }

  userId() {
    const user = this.supabase.auth.user();
    this.id = user?.id;
  }
  push() {
    this.db.newUser((this.id = this.id), (this.username = this.username))

    this.router.navigateByUrl('goodjob')

  }

}
