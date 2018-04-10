import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public score=8;

  constructor() { }

  public up(){
    this.score++;
  }

  public down(){
    this.score--;
  }

  ngOnInit() {
  }

}
