import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-add-character',
    templateUrl: './add.component.html',
    styleUrl: './add.component.css',
    standalone: false
})
export class AddComponent {
  @Input() header!: string;

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter() {
    if(this.character.name.length === 0)return;

    this.onNewCharacter.emit(this.character)
    this.character ={name:'', power:0}

  }
}
