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

 ngOnInit():void {

    }



}
