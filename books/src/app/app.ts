import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from './books/book-list/book-list';

@Component({
  selector: 'books-root',
  imports: [RouterOutlet, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  //
  protected readonly title2 = signal('books :-) '); // reactive state
  title: string = 'books :-)'; // plain state

  // x = `bla ${this.title}   blubb`;
}
