import { Injectable } from '@angular/core';
import { Book } from './book-list/book';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  private readonly URL: string = 'http://localhost:3000/books';

  async getBooks(): Promise<Book[]> {
    try {
      const response: Response = await fetch(this.URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Book[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }

  async getBook(isbn: string): Promise<Book> {
    try {
      const response: Response = await fetch(`${this.URL}/${isbn}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Book = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching book:', error);
      throw error;
    }
  }
  async deleteBook(isbn: string): Promise<string> {
    try {
      const loeschUrl = this.URL + '/' + isbn;

      const response: Response = await fetch(loeschUrl, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
}
