export interface Book {
  isbn: number;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  comment?: string;
  rating: number;
}
