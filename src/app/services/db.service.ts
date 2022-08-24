import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

export const TABLE = 'voteIt_db';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
    );
  }

async insert(name:any, age:any) {
  
    const {data, error} = await this.supabase.from('practice').insert({
      name: name, age: age
    })
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
    }

    async read() {
     
      }
}
