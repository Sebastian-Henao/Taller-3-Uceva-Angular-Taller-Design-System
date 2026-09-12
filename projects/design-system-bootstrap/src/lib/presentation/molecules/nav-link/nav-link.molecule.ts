import { Component, Input } from '@angular/core';
import { NavLink } from '../../../core/interfaces/core.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * @component NavLinkMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Representa un conjunto de enlaces de navegación reutilizables
 * que integran el sistema de rutas de Angular.
 *
 * Este componente se encarga únicamente de renderizar los enlaces
 * y manejar el estado activo mediante `RouterLinkActive`,
 * delegando la estructura visual al template HTML.
 *
 * @example
 * ```html
 * <dsb-nav-link-molecule
 *   [navLinks]="[
 *     { label: 'Átomos', route: '/atoms' },
 *     { label: 'Moléculas', route: '/molecules' },
 *     { label: 'Organismos', route: '/organisms' },
 *   ]"
 * ></dsb-nav-link-molecule>
 * ```
 *
 * @usageNotes
 * - Diseñado para ser usado dentro de organismos como Navbars o Sidebars.
 * - Compatible con Bootstrap (por ejemplo `nav-link`, `active`).
 *
 * @selector dsb-nav-link-molecule
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-nav-link-molecule',
  templateUrl: './nav-link.molecule.html',
  styleUrl: './nav-link.molecule.scss',
  imports: [RouterLink, RouterLinkActive]
})
export class NavLinkMolecule {
  /**
   * Lista de enlaces de navegación a renderizar.
   *
   * Cada enlace debe cumplir con la interfaz `NavLink`.
   *
   * @type {NavLink[]}
   * @default []
   *
   * @example
   * ```ts
   * navLinks = [
   *   { label: 'Home', route: '/' },
   *   { label: 'Profile', route: '/profile' }
   * ];
   * ```
   */
  @Input() navLinks: NavLink[] = [];

  /**
   * Nombre accesible de la navegación.
   *
   * @type {string}
   * @default 'Navegación principal'
   */
  @Input() ariaLabel = 'Navegación principal';
}
