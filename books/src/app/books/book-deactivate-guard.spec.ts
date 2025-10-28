import { TestBed } from '@angular/core/testing';

import { BookDeactivateGuard } from './book-deactivate-guard';

describe('BookDeactivateGuard', () => {
  let guard: BookDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
