import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const appRoutes: Routes = [
        { path:'home', component:HomeComponent },
        { path:'pokemon', component:PokemonComponent }
        // { path:'**', component:FrutasComponent }
    ];
    
export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);