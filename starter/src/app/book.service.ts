import { Injectable } from '@angular/core'
import { BOOKS }     from './sample-data'

@Injectable()
export class BookService {
    getBooks() { return BOOKS }
}

