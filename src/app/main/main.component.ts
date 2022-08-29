import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { DbService } from '../services/db.service';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';
import { zip } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  private supabase: SupabaseClient;


  //NgModel inputs
  text: any = '';
  rating: any = '';
  username: any = '';

  error: string = '';

  //items from database, supabase
  db_items: any[] = [];


  constructor(private db: DbService, private auth: AuthService, private router:Router) {
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
      );

      
  }

  //Push-metod 
  async send(text: any, rating: any)  {

    if (this.rating > 0 && this.rating < 10) {
      this.db.send((text = this.text), (rating = this.rating), (this.username = this.username))
      this.text = '';
      this.rating = '';
    } else {
      this.error = 'You need to give your day a rate between 1 and 10';
    }
  }

  //checking if username

  checkUsername() {
    
  }
    //Getting username
    async getProfile() {


      const user = this.supabase.auth.user();

      console.log(user)
      let userID = user?.id;


      const {data, error} = await this.supabase
      .from('profiles')
      .select('username')
      .eq('id', userID)

  
      if (!data?.length) {
        this.router.navigateByUrl('username')
      } else {
        console.log(data)
        this.username = data[0].username;
        
      }
  }

  //get posts from db 
  async getPosts() {
    const {data, error} = await this.supabase.from('Posts').select('*')
    let y = Object(data).reverse()
    if (error) {
      console.log(error)
    } else {
      //console.log(this.db_items)

      y.forEach((e:any) => {
        let obj = {

          text: e.text,
          created_at: e.created_at.slice(0, 10),
          rating: e.rating,
          username: e.username
        }

        this.db_items.push(obj)

      })
    }
  }

  async ngOnInit(): Promise<void> {

    this.getProfile()
    this.getPosts()
    console.log(this.db_items)

  }
}
