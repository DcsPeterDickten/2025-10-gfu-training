import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Calculator } from './shared/calculator/calculator';

@Component({
  selector: 'books-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'books :-)'; // plain state
}
