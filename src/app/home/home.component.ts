import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
 
  nombre = 0;
  displayImage = true;
  bouton = "cacher";
  formu = false
  noms = [ "Jean",
    "Pierre",
    "Marie",
    "Jacques",
    "François",
  ]

  affi(){
this.formu = true;
  }
  display(){
    this.displayImage = !this.displayImage;
}

  increment(){
    this.nombre ++;
  }


  decrement(){
    if(this.nombre <= 0){
      this.nombre = 0
    } else {
      this.nombre --;
    }
   
  }


  monnaie = 1000;
  convertir(){
    this.monnaie = this.monnaie /1.08;
  }




}

