import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {
  favorito: boolean;
  constructor() {
    this.favorito = false;
   }

  ngOnInit() {
  }
  onClick(){
    this.favorito = !this.favorito;
  }
}
