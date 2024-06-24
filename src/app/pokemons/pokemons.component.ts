import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { PokemonInterface } from '../shared/entities';
import { NgFor } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [NgFor, PokemonDetailComponent, RouterLink],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {

  pokemons:PokemonInterface[]=[];
  pokemonParent: PokemonInterface | undefined;


  constructor(private service:PokemonService){}

  ngOnInit(): void {
      this.getPokemons();
  }

  getPokemons(){
    this.service.fetchAll().subscribe(data => {
      this.pokemons= data.slice(1,7);
      console.log(data);
      
    })
  }


  selectedPokemon(pokemon:PokemonInterface){
    this.pokemonParent = pokemon;
  }

}
