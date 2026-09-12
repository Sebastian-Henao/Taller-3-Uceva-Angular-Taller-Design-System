import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTamano, InputType } from '../../../../public-api';

@Component({
  selector: 'dsb-input-atom',
  imports: [FormsModule],
  template: `
      <input 
      [class]="'form-control ' + tamano" 
      [type]="type" 
      [placeholder]="placeholder" 
      [attr.aria-label]="placeholder"
      [(ngModel)]="value">
  `,
  styleUrl: './input.atom.css',
})
export class InputAtom {
  @Input() tamano: InputTamano = 'form-control';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = 'Default input';
  @Input() value: string = '';
}
