import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Output() buttonClickEmitter = new EventEmitter<boolean>(); 
  buttonClick: boolean = false;

  isButtonClicked() {
    this.buttonClick = !this.buttonClick;
    this.buttonClickEmitter.emit(this.buttonClick);
    console.log(`Saindo do Componente AddButton` + this.buttonClick);
  }
}
