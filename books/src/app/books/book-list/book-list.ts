import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from './book';
import { BookFilterPipe } from '../book-filter-pipe';
import { Rating } from '../../shared/rating/rating';
import { BookData } from '../book-data';

@Component({
  selector: 'books-list',
  imports: [NgClass, FormsModule, CurrencyPipe, BookFilterPipe, Rating, JsonPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnChanges, OnInit, OnDestroy {
  books: Book[] = [];

  protected coverIsVisible = true;
  protected filterText: string = '';

  constructor(private bookData: BookData) {
    console.log('BookList constructor');
  }

  // <books-list customerId=42>
  // </books-list>

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('BookList ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('BookList ngOnInit');
    this.books = this.bookData.getBooks();
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

  plusVote(isbn: string) {
    console.log('plusVote', isbn);
    this.changeRating(isbn, 0.1);
  }
  minusVote(isbn: string) {
    console.log('minusVote', isbn);
    this.changeRating(isbn, -0.1);
  }

  private changeRating(isbn: string, delta: number) {
    const book = this.books.find((book) => book.isbn.toString() === isbn);
    if (book) {
      book.rating += delta;
    }
  }
}
