import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Login } from '../login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  login:Login;
  logindet:Login;
  constructor(private router: Router,private userservice:UserService) {
    this.login = new Login;
    this.logindet = new Login;
   }

  ngOnInit(): void {
  }

  write(){
      this.userservice.log(this.login).subscribe((data) => {this.logindet=data});
      setTimeout(() => {
      if(this.login.username==this.logindet.username){
        this.userservice.logindetails = this.login;
        console.log("logged in succesfully.",this.login);
        this.router.navigateByUrl('/list');
      }else{
        alert("Enter correct username and password");
      }},500);
      
      //
  }
  reg(){
    console.log("shifting to register page");
    this.router.navigateByUrl('/register');
  }

  onkeyupun(input:string){
    this.login.username = input;
    console.log("UN:",this.login.username);
  }
  onkeyuppw(input:string){
    this.login.password = input;
    console.log("PW:",this.login.password);
  }
  popupalert(){
    alert("Enter username and password");
  }

}
