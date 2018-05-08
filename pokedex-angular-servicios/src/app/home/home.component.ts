import { Component, OnInit } from '@angular/core';
import {PeticionService} from '../services/petition.service';
import { PokemonElement } from '../pokemon/pokemon';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { appRoutingProviders } from '../app.routing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[PeticionService]
})
export class HomeComponent implements OnInit {
  public _pokemon:Array<PokemonElement> = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petitionService: PeticionService

  ) { }
  ngOnInit() {
    this._petitionService.getInfo().subscribe(
      result =>{
        for(var item in result){
          var data = JSON.stringify(result);
          localStorage.setItem("pokemon",data);
          this._pokemon.push(
            new PokemonElement(result[item].name,result[item].img,result[item].number,result[item].type,result[item].height,result[item].level,
              result[item].hability,result[item].weight,result[item].likes)
            )
        }
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    )
  }

  redirect(_index){
    this._router.navigate(['/pokemon/'+_index]);
  }

}
