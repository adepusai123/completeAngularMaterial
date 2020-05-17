import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BookDrawerModule } from './book-drawer/book-drawer.module';
import { BookDetailModule } from './book-detail/book-detail.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    BookDrawerModule,
    BookDetailModule
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
