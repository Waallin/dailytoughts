import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { DbService } from '../services/db.service';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';
import { zip } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  private supabase: SupabaseClient;


  text: any = '';
  rating: any = '';
  error: string = '';

  db_items: any[] = [];
  constructor(private db: DbService) {
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
      );
  }

  async send(text: any, rating: any) {
    if (this.rating > 0 && this.rating < 10) {
      this.db.send((text = this.text), (rating = this.rating))
      this.text = '';
      this.rating = '';
    } else {
      this.error = 'You need to give your day a rate between 1 and 10';
    }
  }
  async ngOnInit(): Promise<void> {
    const {data, error} = await this.supabase.from('Posts').select('*')

    let y = Object(data).reverse()

    if (error) {

      console.log(error)
    } else {
      y.forEach((e:any) => {
        this.db_items.push(e)
        console.log(e)
      })
    }
  }
}
