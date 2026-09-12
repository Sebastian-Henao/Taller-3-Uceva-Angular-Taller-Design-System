import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTamano, InputType } from '../../../../public-api';



/**
 * Campo de entrada atómico del Design System.
 *
 * @description
 * Representa un campo reutilizable basado en el componente input de Bootstrap.
 * Permite capturar y enlazar un valor mediante `ngModel`.
 */
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
})
export class InputAtom {
  /** Tamaño visual y clase Bootstrap aplicada al campo. */
  @Input() tamano: InputTamano = 'form-control';

  /** Tipo HTML del campo de entrada. */
  @Input() type: InputType = 'text';

  /** Texto mostrado como ayuda cuando el campo está vacío. */
  @Input() placeholder: string = 'Default input';

  /** Valor actual del campo de entrada. */
  @Input() value: string = '';
}
