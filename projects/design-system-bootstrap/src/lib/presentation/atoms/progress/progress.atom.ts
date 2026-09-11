import { Component, Input } from '@angular/core';
import { ProgressType } from '../../../../public-api';
import { NgClass } from '@angular/common';

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
  styleUrl: './progress.atom.css',
})
export class ProgressAtom {
  @Input() type: ProgressType = 'light';
  @Input() value: number = 0;
}
