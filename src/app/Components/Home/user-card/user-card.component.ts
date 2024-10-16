import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() nome: string = '';
  @Input() email: string = '';
  @Input() telefone: string = '';
  @Input() cpf: string = '';
  @Input() status: string = '';
}
