import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public data: any[];
  public parametro: string;
  public score=8;
  constructor(
    private _route: ActivatedRoute,
  ) { }

  public up(ident){
    this.data[ident].likes++;
  }

  public down(ident){
    this.data[ident].likes--;
  }
  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.parametro = params['ident'];
    });
    this.data = JSON.parse(localStorage.getItem("pokemon"));
  }

}
