import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavLink, ButtonGroupData } from '../../../core/interfaces/core.interface';
import { NavLinkMolecule } from '../../molecules/nav-link/nav-link.molecule';
import { ButtonGroupMolecule } from '../../molecules/button-group/button-group.molecule';

/**
 * Barra lateral de navegación y acciones del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta las moléculas `NavLinkMolecule` y `ButtonGroupMolecule`
 * para construir una barra lateral funcional y reutilizable.
 *
 * Estructura visual:
 * - Encabezado con título personalizable.
 * - Sección de navegación principal mediante `NavLinkMolecule`.
 * - Sección de acciones rápidas al pie mediante `ButtonGroupMolecule`.
 *
 * @example
 * ```html
 * <dsb-sidebar-organism
 *   title="Mi Aplicación"
 *   [navLinks]="links"
 *   [actionButtons]="acciones"
 *   (actionClick)="onAccion($event)">
 * </dsb-sidebar-organism>
 * ```
 */
@Component({
  selector: 'dsb-sidebar-organism',
  templateUrl: './sidebar.organism.html',
  styleUrl: './sidebar.organism.scss',
  imports: [NgIf, NavLinkMolecule, ButtonGroupMolecule],
})
export class SidebarOrganism {

  /**
   * Título principal que aparece en el encabezado del Sidebar.
   *
   * @type {string}
   * @default 'Menú'
   */
  @Input() title: string = 'Menú';

  /**
   * Lista de enlaces de navegación que se renderizan
   * mediante la molécula `NavLinkMolecule`.
   *
   * @type {NavLink[]}
   * @default []
   */
  @Input() navLinks: NavLink[] = [];

  /**
   * Lista de botones de acción que se renderizan en el pie
   * del Sidebar mediante la molécula `ButtonGroupMolecule`.
   *
   * @type {ButtonGroupData[]}
   * @default []
   */
  @Input() actionButtons: ButtonGroupData[] = [];

  /**
   * Controla si el Sidebar está visible (expandido) o colapsado.
   *
   * @type {boolean}
   * @default true
   */
  @Input() isOpen: boolean = true;

  /**
   * Evento emitido cuando el usuario pulsa un botón de acción.
   *
   * @description
   * Propaga el identificador del botón presionado (proveniente de
   * `ButtonGroupMolecule`) hacia el componente padre, desacoplando
   * la lógica de negocio del organismo.
   *
   * @emits string Identificador (`idButton`) del botón presionado.
   */
  @Output() actionClick = new EventEmitter<string>();

  /**
   * Propaga el evento de clic desde `ButtonGroupMolecule` hacia afuera.
   *
   * @param {string} buttonId Identificador del botón presionado.
   * @returns {void}
   */
  onActionClick(buttonId: string): void {
    this.actionClick.emit(buttonId);
  }

  /**
   * Alterna la visibilidad del Sidebar entre expandido y colapsado.
   *
   * @returns {void}
   */
  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
