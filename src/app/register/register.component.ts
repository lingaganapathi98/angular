import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Register } from './Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register;
  constructor(private router: Router,private userservice:UserService){
    this.register = new Register;
   }

  ngOnInit(): void {
  }

  onsubmit() {
    this.userservice.save(this.register).subscribe((data) =>{ console.log(this.register)},error => console.log(error));
    console.log("registered in succesfully.");
    this.router.navigateByUrl('/login');
  }
  onkeyupun(input:string){
    this.register.username = input;
    
  }
  onkeyuppw(input:string){
    this.register.password = input;
    
  }
  onkeyupsc(input:string){
    this.register.code = input;
    
  }
  popupalert(){
    alert("Enter username and password");
  }

}
