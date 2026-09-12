import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  InputAtom,
  InputTamano,
  InputType,
  ProgressAtom,
  ProgressType,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    ProgressAtom,
    InputAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  progresses: { type: ProgressType, value: number }[] = [
    { type: 'light', value: 0 },
    { type: 'success', value: 25 },
    { type: 'info', value: 50 },
    { type: 'warning', value: 75 },
    { type: 'danger', value: 100 },
  ]

  inputs: { tamano: InputTamano, type: InputType, placeholder: string }[]= [
    { tamano: 'form-control-sm', type: 'text', placeholder: 'Input pequeño (para texto)' },
    { tamano: 'form-control', type: 'email', placeholder: "Input por defecto (para correo)" },
    { tamano: 'form-control-lg', type: 'password', placeholder: 'Input grande (Para passwords)' }
  ]
  
  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

}