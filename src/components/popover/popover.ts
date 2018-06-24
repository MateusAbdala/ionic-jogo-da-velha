import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  multiplayer: boolean = false;
  player1;
  player2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player1 = navParams.get('player1');
    this.player2 = navParams.get('player2');
  }
  mudaModo(){
    this.multiplayer = !this.multiplayer;
  }

}
