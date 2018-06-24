import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  squares = Array(9).fill(null);
  turn = null;
  player = 'X';
  playername = null;
  player1 = 'Mateus';
  player2 = 'Lika';
  winner = null;
  draw = null;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent,{
      player1: this.player1,
      player2: this.player2
    });
    popover.present({
      ev: myEvent
    });
  }

  get gameStatusMessage(){
    this.playername = (this.player === 'X') ? this.player1 : this.player2;
    return this.winner? `${this.winner} Ganhou!` : this.draw? `Empate!` : `É a sua vez ${this.playername}`;
    // return this.winner? `${this.winner} Ganhou!` : 
    // `É a sua vez ${this.playername}`;
  }

  handleMove(position) {

    //verifica se há um vencedor
    if(!this.winner){
        //verifica se a posição está livre
        if (!this.squares[position] ){
          this.squares[position] = this.player;
          if(this.winningMove()) {
            this.playername = (this.player === 'X') ? this.player1 : this.player2;
            this.winner = this.playername;
          }
          this.player = this.player === 'X' ? 'O' : 'X';
        }else{
          alert("Seu oponente já marcou este quadrado!");
        }
    }else{
      alert("O Jogo já terminou!");
    }
      
  }

  winningMove() {
    this.turn++;
    //condições para ganhar o jogo
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6]             // diagonais 
    ];
    //validando a condição atual com as condições do jogo
    for (let condition of conditions) {
        if ( this.squares[condition[0]]
            && this.squares[condition[0]] === this.squares[condition[1]]
            && this.squares[condition[1]] === this.squares[condition[2]]) {
              return true;
        }
    }
    if (this.turn >=9){
      this.draw = this.playername;
    }
    return false;
  }

  restartGame() {
    //limpa o Array, e vencedor
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
    this.turn = null;
    this.draw = null;
  }

}