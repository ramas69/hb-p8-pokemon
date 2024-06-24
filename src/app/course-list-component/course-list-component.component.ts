import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { formationsMock } from '../shared/mockFormation';
import { formationInterface } from '../shared/entities';


@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [NgFor, NgIf, RegistrationFormComponent],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent implements OnInit {

  display = false;

formations: formationInterface[] = [];

ngOnInit(): void {

 this.fetchAll();
}


fetchAll(){
  this.formations= formationsMock;
}

 
  

  afficher(){
    this.display = true;
    console.log('test');
    
  }


  
}
