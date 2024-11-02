import { Component, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Cliente } from './Cliente.model';
import { DataService } from '../../../Services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private dataService: DataService) {}

  cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    status: '',
    telefone: ''
  };

  ngOnInit() {
  }

  @Output() buttonAddEmitter = new EventEmitter<boolean>();

  isButtonClicked() {
    this.buttonAddEmitter.emit(false);
  }

  sendData(form: NgForm) {
    // document.querySelectorAll('.form-input').forEach( (campo) => {

    // } );
      if (form.invalid) {
        return;
      }
    this.cliente = form.value as Cliente;
    console.log(this.cliente);
    // this.dataService.addCliente(this.cliente).subscribe( response => console.log(`Resposta do Servidor: ${response}`) );
    // this.buttonAddEmitter.emit(false);

    console.log(form.controls);
  }
}
