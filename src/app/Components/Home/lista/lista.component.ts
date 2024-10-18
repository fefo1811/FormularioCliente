import { Component } from '@angular/core';
import { DataService } from '../../../Services/data.service';
import { Cliente } from '../form/Cliente.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  constructor( private dataService: DataService ) {}
  dadosCliente: Cliente[] = [];

  ngOnInit() {
    this.dataService.getData().subscribe( (data) => this.dadosCliente = data);
  }

  buttonClicked: boolean = false;


  isButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }

  // catcherButtonEmitter($event: boolean) {
  //   console.log('Valor Atual no Componente Lista ' + this.buttonClicked);
  //   this.buttonClicked = $event;
  //   console.log('Chegou no Componente Lista ' + this.buttonClicked);
  // }
}
