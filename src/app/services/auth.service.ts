import { computeMsgId } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  username:any = '';
  uuid: any = '';

  private supabase: SupabaseClient;
    
  constructor() {
    this.supabase = createClient(
      environment.supabaseURL,
      environment.supabaseKey
    );

    this.supabase.auth.onAuthStateChange((event, session) => {
      let userid = session?.user?.id;
      console.log('ditt id är ' + userid)
      

    })

  }


  signUp({email, password } : { 
    email:string,
    password: string}) {
    return this.supabase.auth.signUp({email, password})
  }

  signIn({email, password } : { 
    email:string,
    password: string}) {
    return this.supabase.auth.signIn({email, password})
  }

  async signOut(){ 
    const { error } = await this.supabase.auth.signOut()
    if (error) {
      console.log('error: ' + error)

    }
  }

  



}
