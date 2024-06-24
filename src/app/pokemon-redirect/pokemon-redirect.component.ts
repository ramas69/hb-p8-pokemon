import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonInterface } from '../shared/entities';
import { PokemonService } from '../shared/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-redirect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-redirect.component.html',
  styleUrl: './pokemon-redirect.component.css'
})
export class PokemonRedirectComponent implements OnInit, OnDestroy {

  constructor( private service:PokemonService, private route:ActivatedRoute){}

  pokemon:PokemonInterface | undefined;
  private datapokemon!:Subscription;

  ngOnInit(): void {
      this.fetchOne();
  }
  // 1ere methode 
/*
  fetchOne(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.fetchOnePokemon(id).subscribe(data =>{
      this.pokemon = data;
    })
  }
  */
   // 2eme methode 
  fetchOne(){
    this.datapokemon =this.route.params.subscribe( params => {
      this.service.fetchOnePokemon(params['id']).subscribe( data => {
        this.pokemon = data;
      })
    })
  }

  ngOnDestroy(): void {
     this.datapokemon.unsubscribe();
  }
}
