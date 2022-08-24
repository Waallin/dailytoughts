import { Component, OnInit, ɵfindLocaleData } from '@angular/core';
import { DbService } from '../services/db.service';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private supabase: SupabaseClient;
  
  constructor(private db: DbService) {
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
    );
  }

  name: string = '';
  age: any = '';

  items: any[] = [];

  async ngOnInit(): Promise<void> {
   /*const {data, error} = await this.supabase.from('practice').select('*')
      let x = data?.length;
      
      if (error) {
        console.log(error)
      } else {
        data.forEach(item => {
          console.log(item)
          let obj = {
            name: item.name,
            age: .age
          }
          this.items.push(obj)
        })
      }
      console.log(this.items) */
    }

  async insert(name: any, age: any) {
    return await this.db.insert((name = this.name), (age = this.age));
  }


}
