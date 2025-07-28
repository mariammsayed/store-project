import { RouterLink } from '@angular/router';
import { Iproduct } from './../../interface/iproduct';
import { Component, Input, input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Iproduct;

}
