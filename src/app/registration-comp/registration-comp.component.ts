import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration-comp',
  templateUrl: './registration-comp.component.html',
  styleUrls: ['./registration-comp.component.css']
})
export class RegistrationCompComponent implements OnInit {

  user: User = new User("","",0,"");
  message: any;

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }
  
  public registerNow(){
    let response = this.service.doRegisteration(this.user);
    response.subscribe((data)=>this.message=data);
  }
}
