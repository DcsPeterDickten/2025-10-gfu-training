import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  imports: [JsonPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books: any[] = [
    { isbn: 1, title: 'Angular 18', author: 'Author 1', price: 10 },
    { isbn: 2, title: 'Angular 19', author: 'Author 2', price: 20 },
    { isbn: 3, title: 'Angular 20', author: 'Author 3', price: 30 },
  ];
}
