import { Component, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Cliente } from './Cliente.model';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private dataService: DataService) {}

  cliente: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: ''
  }

  ngOnInit() {
  }

  @Output() buttonAddEmitter = new EventEmitter<boolean>();

  isButtonClicked() {
    this.buttonAddEmitter.emit(false);
  }

  sendData() {
    // document.querySelectorAll('.form-input').forEach( (campo) => {

    // } );

    this.dataService.addCliente(this.cliente).subscribe( response => console.log(`Resposta do Servidor: ${response}`) );
    this.buttonAddEmitter.emit(false);
  }
}
