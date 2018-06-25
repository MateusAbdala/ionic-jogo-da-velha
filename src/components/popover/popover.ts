import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  multiplayerPop: boolean;
  playerPop1;
  playerPop2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.playerPop1 = navParams.get('player1');
    this.playerPop2 = navParams.get('player2');
    this.multiplayerPop = navParams.get('multiplayer');
    console.log(navParams.get('multiplayer'))
  }

  saveSettings(){
    let data = { 
      player1 : this.playerPop1,
      player2 : this.playerPop2,
      multiplayer : this.multiplayerPop
    };
    this.viewCtrl.dismiss(data);
  }

}
