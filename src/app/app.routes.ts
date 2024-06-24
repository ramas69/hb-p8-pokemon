import { Routes } from '@angular/router';

import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponentComponent } from './course-list-component/course-list-component.component';
import { TypescriptExoComponent } from './typescript-exo/typescript-exo.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { Error404Component } from './error404/error404.component';
import { PokemonRedirectComponent } from './pokemon-redirect/pokemon-redirect.component';


export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'apropos', component: AproposComponent},
    { path:'contact', component: ContactComponent},
    { path:'formations', component: CourseListComponentComponent},
    { path:'type', component: TypescriptExoComponent},
    {path:"poke", component:PokemonsComponent},
    {path:"poke/:id", component:PokemonRedirectComponent},
    { path: '**', component:Error404Component }
  

   


];
