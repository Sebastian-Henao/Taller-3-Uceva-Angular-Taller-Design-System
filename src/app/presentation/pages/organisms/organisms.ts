import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  ContainerAtom,
  NavbarConfig,
  NavbarOrganism,
  SidebarOrganism,
  ButtonGroupData,
  NavLink,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NgIf, NavbarOrganism, ContainerAtom, SidebarOrganism],
})
export class Organisms {

  /** Configuración del organismo NavbarOrganism de ejemplo. */
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  };

  /** Título del organismo SidebarOrganism de ejemplo. */
  sidebarTitle: string = 'Design System';

  /** Lista de rutas de navegación para el SidebarOrganism. */
  sidebarLinks: NavLink[] = [
    { text: 'Átomos', url: '/atoms' },
    { text: 'Moléculas', url: '/molecules' },
    { text: 'Organismos', url: '/organisms' },
  ];

  /** Botones de acción del pie de página del SidebarOrganism. */
  sidebarActions: ButtonGroupData[] = [
    { idButton: 'settings', type: 'secondary', text: 'Ajustes' },
    { idButton: 'logout', type: 'danger', text: 'Salir' },
  ];

  /** Identificador del último botón de acción pulsado en el sidebar. */
  lastAction: string = '';

  /**
   * Maneja el evento de acción del SidebarOrganism.
   *
   * @param buttonId Identificador del botón presionado.
   */
  onSidebarAction(buttonId: string): void {
    this.lastAction = buttonId;
  }
}
