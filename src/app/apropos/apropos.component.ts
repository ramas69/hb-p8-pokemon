import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';
import { UserInterface } from '../entities';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit {

  constructor( private service: UserService){}

  users:UserInterface[]=[];


  ngOnInit(): void {


  }

  getUsers(){
    this.service.fetchAll().subscribe(data =>{
      this.users = data;
    })
  }



}
