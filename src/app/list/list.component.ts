import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Contact} from '../contact'
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cont: Contact[];
  contac:Contact;
  constructor(private router: Router,private userservice: UserService) { 
    this.contac = new Contact;
    this.userservice.log(this.userservice.logindetails).subscribe((data) => console.log(this.userservice.logindetails));
  }
  
  ngOnInit() {
    
    setTimeout(() => {this.userservice.listall().subscribe(data => {
      this.cont = data;
    });}, 500);
    console.log("got contacts");
    console.log(this.cont);
  }

  logout(){
    this.userservice.logout();
    this.router.navigateByUrl('/login');
  }

  onsubmit() {
    
    this.userservice.addcont(this.contac).subscribe((data) => console.log(this.contac));
    
    this.userservice.listall().subscribe(data => {console.log(data)});
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 500);
    
  }
  onkeyupname(input:string){
    this.contac.name = input;
    
  }
  onkeyupphnum(input:string){
    this.contac.phnum = input;
    
  }
  onkeyupemail(input:string){
    this.contac.email = input;
    
  }
  popupalert(){
    alert("Enter value in all the fields.")
  }

}
