import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDrawerComponent } from './book-drawer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookDrawerComponent],
  exports:[BookDrawerComponent]
})
export class BookDrawerModule { }
