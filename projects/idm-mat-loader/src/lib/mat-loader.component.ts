import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { MatLoaderService } from './mat-loader.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'idm-mat-loader',
  template: `
    <div class="progressLoader" *ngIf="isLoading || fail | async" [@showhide]>
      <mat-progress-bar [color]="color" [mode]="mode"></mat-progress-bar>
    </div>
    <div class="progressLoader" *ngIf="fail | async" [@showhide]>
      <mat-progress-bar color="warn" [mode]="mode"></mat-progress-bar>
    </div>
    <div class="progressLoader" *ngIf="success | async" [@showhide]>
      <mat-progress-bar color="accent" [mode]="mode"></mat-progress-bar>
    </div>
  `,
  styles: [
    `.progressLoader {
      position: fixed;
      top: 0px;
      width: 100%;
      z-index: 1999;
    }`
  ],
  animations: [
    trigger(
      'showhide',
      [
        transition(
          ':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ transform: 'translateX(0)', 'opacity': 1 }),
            animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))
          ]
        )
      ]
    )
  ]
})
export class MatLoaderComponent {

  color = 'primary';
  mode = 'indeterminate';

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  success: Subject<boolean> = this.loaderService.succeeded;
  fail: Subject<boolean> = this.loaderService.failed;

  constructor(private loaderService: MatLoaderService) { }

}
