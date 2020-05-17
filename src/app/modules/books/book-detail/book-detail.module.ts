import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailComponent } from './book-detail.component';
import { BookDrawerModule } from '../book-drawer/book-drawer.module';

@NgModule({
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    BookDrawerModule
  ],
  declarations: [BookDetailComponent],
  exports: [BookDetailComponent, BookDetailRoutingModule]
})

export class BookDetailModule { }
