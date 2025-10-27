import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'books-list',
  imports: [NgClass, FormsModule],
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
  protected filterText: string = '';

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
