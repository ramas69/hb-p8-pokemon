import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  url="https://tyradex.tech/api/v1/pokemon";

  fetchAll(){
    return this.http.get<PokemonInterface[]>(this.url);
  }

  fetchOnePokemon(id:any){
    return this.http.get<PokemonInterface>(this.url+"/"+id);
  }


}
