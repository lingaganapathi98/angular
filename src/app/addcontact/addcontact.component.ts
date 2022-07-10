import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  contact:Contact;
  constructor(private router: Router,private userservice: UserService) { }

  ngOnInit(): void {
  }

  onsubmit() {
    this.userservice.addcont(this.contact).subscribe((data) => console.log(this.contact));
    
    this.userservice.listall().subscribe(data => {console.log(data)});
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 500);
    
  }
  popupalert(){
    alert("Enter value in all the fields.")
  }

  listall(){
    this.router.navigateByUrl('/list');
  }

}
