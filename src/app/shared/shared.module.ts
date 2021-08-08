import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [SharedComponent, LoaderComponent],
  exports: [LoaderComponent],
})
export class SharedModule { }
