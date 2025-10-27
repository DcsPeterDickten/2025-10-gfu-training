import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  imports: [JsonPipe, NgClass],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books: any[] = [
    {
      isbn: 1,
      title: 'Angular 18',
      author: 'Author 1',
      price: 8,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
    },
    {
      isbn: 2,
      title: 'Angular 19',
      author: 'Author 2',
      price: 20,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
    },
    {
      isbn: 3,
      title: 'Angular 20',
      author: 'Author 3',
      price: 30,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
    },
  ];

  protected coverIsVisible = true;

  toggleCover() {
    // this.showCover = !this.showCover;
    console.log('toggleCover');
    this.coverIsVisible = !this.coverIsVisible;
    // this.books[0].price += 1;
  }
}
