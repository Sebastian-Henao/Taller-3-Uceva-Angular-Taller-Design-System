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
 * delegando la estructura visual al template y a sus estilos propios.
 *
 * @example
 * ```html
 * <dsb-nav-link-molecule
 *   [navLinks]="[
 *     { text: 'Átomos', url: '/atoms' },
 *     { text: 'Moléculas', url: '/molecules' },
 *     { text: 'Organismos', url: '/organisms' },
 *   ]"
 *   ariaLabel="Navegación del Showcase"
 * ></dsb-nav-link-molecule>
 * ```
 *
 * @usageNotes
 * - Diseñado para ser usado dentro de organismos como Navbars o Sidebars.
 * - Presenta los enlaces como tabs y resalta la ruta activa.
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
  *   { text: 'Home', url: '/' },
  *   { text: 'Profile', url: '/profile' }
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
