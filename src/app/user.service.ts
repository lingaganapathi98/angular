import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "./user";
import { Register } from "./register/Register";
import { Contact } from "./contact";
import { Observable } from "rxjs";
import { Login } from "./login";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    logindetails:Login;
    constructor(private http:HttpClient) {
        this.logindetails=new Login;
    }

    public log(login:Login):Observable<Login> {
        return this.http.get<Login>('http://localhost:8080/getuserdetails/'+login.username+'/'+login.password);
    }
    public addcont(cont:Contact){
        return this.http.post('http://localhost:8080/addcontact',cont);
    }
    public logout(){
        return this.http.post('http://localhost:8080/','logout');
    }
    public save(reg: Register) {
        return this.http.post('http://localhost:8080/createuser', reg);
    }
    public listall(): Observable<Contact[]> {
        return this.http.get<Contact[]>('http://localhost:8080/getcontacts/');
    }
    
}