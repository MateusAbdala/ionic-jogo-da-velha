import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  multiplayer: boolean = false;
  constructor() {

  }
  mudaModo(){
    this.multiplayer = !this.multiplayer;
  }

}
