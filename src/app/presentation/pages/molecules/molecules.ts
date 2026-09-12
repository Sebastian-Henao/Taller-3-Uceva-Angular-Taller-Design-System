import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  ContainerAtom, 
  NavLink, 
  NavLinkMolecule 
} from '@brejcha13320/design-system-bootstrap';

/**
 * Showcase de las moléculas del sistema de diseño.
 *
 * Presenta un grupo de acciones compuesto por `ButtonAtom` y una navegación
 * compuesta por enlaces tipados. La página permite verificar la configuración
 * y la interacción de ambas moléculas desde la ruta `/molecules`.
 */
@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
  ],
})
export class Molecules {
  /** Configuraciones tipadas que alimentan el grupo de acciones. */
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  /** Enlaces que alimentan la navegación de tabs del Showcase. */
  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  /** Identificador de la última acción seleccionada por el usuario. */
  selectedButtonId: string | null = null;

  /** Actualiza la evidencia visible de la interacción con el grupo de botones. */
  onClick(idButton: string): void {
    this.selectedButtonId = idButton;
  }
}
