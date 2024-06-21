import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceServiceService {

  constructor( private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/posts";

  fetchAll(){
    return this.http.get(this.url);
  }



}
