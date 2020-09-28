import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLoaderComponent } from './mat-loader.component';
import { MatLoaderInterceptor } from './mat-loader.interceptor';
import { MatLoaderService } from './mat-loader.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MatLoaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [MatLoaderComponent],
  providers: [
    MatLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: MatLoaderInterceptor, multi: true }
  ],
})
export class MatLoaderModule { }
