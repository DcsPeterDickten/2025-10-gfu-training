import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book-list/book';

// (books | bookFilter:filterText)

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filterText: string, filterBy: string = 'title'): Book[] {
    const result = books.filter(
      (book: Book) =>
        (book[filterBy as keyof Book] as string).toLowerCase().indexOf(filterText.toLowerCase()) >
        -1
    );
    return result;
  }
}
