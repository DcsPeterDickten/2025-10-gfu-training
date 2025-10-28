import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from './book';
import { BookFilterPipe } from '../book-filter-pipe';

@Component({
  selector: 'books-list',
  imports: [NgClass, FormsModule, CurrencyPipe, BookFilterPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnChanges, OnInit, OnDestroy {
  books: Book[] = [
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
  protected filterText: string = '';

  constructor() {
    console.log('BookList constructor');
  }

  // <books-list customerId=42>
  // </books-list>

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('BookList ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('BookList ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }

  toggleCover() {
    // this.showCover = !this.showCover;
    console.log('toggleCover');
    this.coverIsVisible = !this.coverIsVisible;
    // this.books[0].price += 1;
  }

  updateFilter(bla: any) {
    console.log('updateFilter', bla, this.filterText);
  }
}
