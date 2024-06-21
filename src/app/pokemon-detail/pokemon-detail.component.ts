import { Component, Input } from '@angular/core';
import { PokemonInterface } from '../entities';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  @Input() pokemonEnfant:PokemonInterface | undefined;
}
