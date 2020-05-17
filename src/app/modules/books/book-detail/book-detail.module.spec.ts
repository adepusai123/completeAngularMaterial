import { BookDetailModule } from './book-detail.module';

describe('BookDetailModule', () => {
  let bookDetailModule: BookDetailModule;

  beforeEach(() => {
    bookDetailModule = new BookDetailModule();
  });

  it('should create an instance', () => {
    expect(bookDetailModule).toBeTruthy();
  });
});
