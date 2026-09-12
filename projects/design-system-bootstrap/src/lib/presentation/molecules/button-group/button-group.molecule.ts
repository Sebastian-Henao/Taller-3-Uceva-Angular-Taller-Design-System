import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonGroupData, ButtonType } from '../../../core/interfaces/core.interface';
import { ButtonAtom } from '../../atoms/button/button.atom';

/**
 * Grupo de botones del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Renderiza un conjunto de botones atómicos (`ButtonAtom`)
 * y centraliza la emisión de eventos de interacción.
 */
@Component({
  selector: 'dsb-button-group-molecule',
  templateUrl: './button-group.molecule.html',
  imports: [CommonModule, ButtonAtom],
})
export class ButtonGroupMolecule {
  /**
   * Lista de configuraciones de botones.
   *
   * @description
   * Define los botones que serán renderizados dentro del grupo,
   * incluyendo su identificador, texto y tipo visual.
   *
   * @type {ButtonGroupData[]}
   * @default []
   */
  @Input() buttonsGroupData: ButtonGroupData[] = [];

  /**
   * Nombre accesible del grupo de botones.
   *
   * @type {string}
   * @default 'Grupo de botones'
   */
  @Input() ariaLabel = 'Grupo de botones';

  /**
   * Evento emitido al hacer click en alguno de los botones del grupo.
   *
   * @emits string Identificador del botón presionado
   */
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Retorna la clase CSS correspondiente al tipo del botón.
   *
   * @param {ButtonType} type Tipo visual del botón
   * @returns {string} Clase Bootstrap del botón
   */
  getClass(type: ButtonType): string {
    return `btn-${type}`;
  }

  /**
   * Emite el evento `clicker` con el identificador del botón.
   *
   * @param {string} idButton Identificador del botón presionado
   * @returns {void}
   */
  onEmit(idButton: string): void {
    this.clicker.emit(idButton);
  }
}
