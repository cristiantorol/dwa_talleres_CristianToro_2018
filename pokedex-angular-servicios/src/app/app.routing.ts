import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const appRoutes: Routes = [
        { path:'', component:HomeComponent },
        { path:'home', component:HomeComponent },
        { path:'pokemon/:ident', component:PokemonComponent },
        { path:'main', component:MainComponent},
        // { path:'**', component:FrutasComponent }
    ];
    
export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);