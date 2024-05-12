import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() header!: string
  @Input() characters!: Character[]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  emitCharacterIndex(id:string):void{
    if(!id)return
    this.onDeleteCharacter.emit(id)
  }
}
