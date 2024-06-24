import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../entities';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }


  url = "https://jsonplaceholder.typicode.com/users";

  fetchAll(){
    return this.http.get<UserInterface[]>(this.url);
  }


}
