import { Component }    from '@angular/core'
import { Book }     from './book'
import { BookService }  from './book.service'


@Component({
    selector: 'book-list',
    providers: [BookService],
    template:
        `<div *ngFor="let book of books">
            <b>{{book.name}}</b> by {{book.author}}
         </div>`,
    styles: ['b {color: dodgerblue}']
})

export class BookListComponent {
    books: Book[];
    constructor(bookService: BookService) {
        this.books = bookService.getBooks()
    }
}

