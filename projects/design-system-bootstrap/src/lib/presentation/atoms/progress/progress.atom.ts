import { Component, Input } from '@angular/core';
import { ProgressType } from '../../../../public-api';
import { NgClass } from '@angular/common';

/**
 * Indicador de progreso atómico del Design System.
 *
 * @description
 * Representa una barra de progreso reutilizable basada en Bootstrap.
 * Muestra el porcentaje actual y aplica el color visual indicado.
 */
@Component({
  selector: 'dsb-progress-atom',
  imports: [NgClass],
  template: `
  <div class="progress" role="progressbar"
     [attr.aria-label]="type + ' example'"
     [attr.aria-valuenow]="value"
     aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" [ngClass]="'bg-' + type" [style.width.%]="value">
      {{ value }}%
    </div>
  </div>
  `,
})
export class ProgressAtom {
  /** Tipo visual de la barra de progreso. */
  @Input() type: ProgressType = 'light';

  /** Porcentaje de progreso mostrado, entre 0 y 100. */
  @Input() value: number = 0;
}
