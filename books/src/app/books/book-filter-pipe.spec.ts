import { BookFilterPipe } from './book-filter-pipe';
import { Book } from './book-list/book';

describe('BookFilterPipe', () => {
  let pipe: BookFilterPipe;

  beforeEach(() => {
    pipe = new BookFilterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array when books array is empty', () => {
    const result = pipe.transform([], 'Angular');
    expect(result).toEqual([]);
  });

  it('should return all books when filter text is empty', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'Angular Development',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 4.5,
      },
      {
        isbn: 2,
        title: 'React Guide',
        author: 'Author 2',
        price: 24.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 4.0,
      },
    ];

    const result = pipe.transform(books, '');
    expect(result).toEqual(books);
  });

  it('should filter books by title (case insensitive)', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'Angular Development',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 4.5,
      },
      {
        isbn: 2,
        title: 'React Guide',
        author: 'Author 2',
        price: 24.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 4.0,
      },
      {
        isbn: 3,
        title: 'Advanced Angular',
        author: 'Author 3',
        price: 34.99,
        coverUrl: 'https://example.com/book3.jpg',
        rating: 3.5,
      },
    ];

    const result = pipe.transform(books, 'angular');
    expect(result.length).toBe(2);
    expect(result[0].title).toBe('Angular Development');
    expect(result[1].title).toBe('Advanced Angular');
  });

  it('should return empty array when no books match filter', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'Angular Development',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 4.5,
      },
      {
        isbn: 2,
        title: 'React Guide',
        author: 'Author 2',
        price: 24.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 4.0,
      },
    ];

    const result = pipe.transform(books, 'Vue');
    expect(result).toEqual([]);
  });

  it('should filter books with partial title matches', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'JavaScript Fundamentals',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 0,
      },
      {
        isbn: 2,
        title: 'Advanced JavaScript',
        author: 'Author 2',
        price: 34.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 0,
      },
      {
        isbn: 3,
        title: 'Python Programming',
        author: 'Author 3',
        price: 24.99,
        coverUrl: 'https://example.com/book3.jpg',
        rating: 0,
      },
    ];

    const result = pipe.transform(books, 'script');
    expect(result.length).toBe(2);
    expect(result[0].title).toBe('JavaScript Fundamentals');
    expect(result[1].title).toBe('Advanced JavaScript');
  });

  it('should handle undefined filter text as empty string', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'Angular Development',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 0,
      },
    ];

    const result = pipe.transform(books, undefined as any);
    expect(result).toEqual(books);
  });

  it('should handle special characters in filter text', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: 'C# Programming',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 0,
      },
      {
        isbn: 2,
        title: 'C++ Guide',
        author: 'Author 2',
        price: 24.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 0,
      },
    ];

    const result = pipe.transform(books, 'C#');
    expect(result.length).toBe(1);
    expect(result[0].title).toBe('C# Programming');
  });

  it('should handle books with empty titles', () => {
    const books: Book[] = [
      {
        isbn: 1,
        title: '',
        author: 'Author 1',
        price: 29.99,
        coverUrl: 'https://example.com/book1.jpg',
        rating: 0,
      },
      {
        isbn: 2,
        title: 'Valid Title',
        author: 'Author 2',
        price: 24.99,
        coverUrl: 'https://example.com/book2.jpg',
        rating: 0,
      },
    ];

    const result = pipe.transform(books, 'Valid');
    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Valid Title');
  });
});
