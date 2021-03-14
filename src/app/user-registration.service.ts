import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  hostname = "http://localhost:9090";

  public doRegisteration(user){
    return this.http.post(this.hostname+"/register",user, {responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.hostname+"/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get(this.hostname+"/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete(this.hostname+"/cancel/"+id);
  }


}
