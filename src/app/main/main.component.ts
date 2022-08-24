import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  text:any = '';
  rating:any = '';
  error:string= '';


  constructor(private db: DbService) { }


  async send(text:any, rating:any) {
    if (this.rating > 0 && this.rating < 10) {

      text: this.text;
      rating: this.rating;
      console.log(this.text)
      return this.db.send(text = this.text, rating = this.rating)
  
    this.error = '';
  } else {
    this.error = 'You need to give your day a rate between 1 and 10';
  }
  }
  ngOnInit(): void {
  }

}
