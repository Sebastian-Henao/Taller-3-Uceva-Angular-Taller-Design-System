import { Component } from '@angular/core';

@Component({
  selector: 'dsb-progress-atom',
  imports: [],
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
  styleUrl: './progress.atom.css',
})
export class ProgressAtom {

}
