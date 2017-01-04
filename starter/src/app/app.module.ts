import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BooksComponent } from './books.component'
import { BookListComponent } from './book-list.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [BooksComponent, BookListComponent],
  bootstrap: [BooksComponent]
})

export class AppModule { }
