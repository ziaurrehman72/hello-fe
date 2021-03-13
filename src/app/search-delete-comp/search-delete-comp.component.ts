import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete-comp',
  templateUrl: './search-delete-comp.component.html',
  styleUrls: ['./search-delete-comp.component.css']
})
export class SearchDeleteCompComponent implements OnInit {
  users:any;
  email:string;
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    let response = this.service.getUsers();
    response.subscribe((data)=>this.users=data);
  }

  public deleteUser(id:number){
      let response = this.service.deleteUser(id);
      response.subscribe((data)=>this.users=data);
  }

  public findUserByEmailId(){
    let response = this.service.getUserByEmail(this.email);
    response.subscribe((data)=>this.users=data);
  }
}
