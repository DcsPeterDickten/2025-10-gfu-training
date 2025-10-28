import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Calculator } from './shared/calculator/calculator';
import { bookGuard } from './books/book-guard-guard';

export const routes: Routes = [
  { path: 'books', component: BookList },
  { path: 'calculator', component: Calculator, canActivate: [bookGuard] },
  { path: '**', redirectTo: '/books' },
];
