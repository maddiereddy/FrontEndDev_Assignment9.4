import { Component } from '@angular/core'
import { BookListComponent } from './book-list.component'

@Component({
    selector: 'my-books',
    template:
        `<h2>Bestselling Books</h2>
        <book-list></book-list>`,

    styles: ['h2 {color: blue}']
})

export class BooksComponent {}

