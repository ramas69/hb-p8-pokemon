import { Component } from '@angular/core';
import { MangaInterface } from '../entities';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-typescript-exo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './typescript-exo.component.html',
  styleUrl: './typescript-exo.component.css'
})
export class TypescriptExoComponent {


  name: string = "Jean";
  age: number = 30;

  //mangas:string[]=[""];
  pokemons:number[]= [1, 2, 4];
  noms: Array<string> =["Lol", "mdr"];
  prenoms: Array<number> = [1,2, 3];
  estMajeur:boolean = true;

  lol:any = 2;
  mdr:any = "mdr";

  fonction():void{
    console.log("Bonjour");
  }

  additioner():number{
    return 2+2;
  }

  gourde:undefined ;
  zero:null = null;

  identite: [string, number] = ["Jean", 10] // ET

  ville: string | number = 69007;// OU Lyon



  mangas:MangaInterface[] = [ 

    { title: 'Naruto', author: 'Masashi Kishimoto', genre: 'Shonen', volumes: 72, published: '1999-2014' },
     { title: 'One Piece', author: 'Eiichiro Oda', genre: 'Shonen', volumes: 100, published: '1997-present' }, 
     { title: 'Attack on Titan', author: 'Hajime Isayama', genre: 'Seinen', volumes: 34, published: '2009-2021' }, 
     { title: 'Death Note', author: 'Tsugumi Ohba', genre: 'Shonen', volumes: 12, published: '2003-2006' }, { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', genre: 'Shonen', volumes: 27, published: '2001-2010' } ];

}





