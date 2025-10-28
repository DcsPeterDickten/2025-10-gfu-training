import { Injectable } from '@angular/core';
import { Book } from './book-list/book';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  getBooks(): Book[] {
    return [
      {
        isbn: 1,
        title: 'Angular 18',
        author: 'Author 1',
        price: 8,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
        rating: 4.6,
      },
      {
        isbn: 2,
        title: 'Angular 19',
        author: 'Author 2',
        price: 20,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
        rating: 4.0,
      },
      {
        isbn: 3,
        title: 'Angular 20',
        author: 'Author 3',
        price: 30,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
        rating: 3.5,
      },
    ];
  }
}
