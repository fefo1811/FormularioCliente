import { Component } from '@angular/core';
import { Cliente } from './Cliente.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: ''
  }
}
