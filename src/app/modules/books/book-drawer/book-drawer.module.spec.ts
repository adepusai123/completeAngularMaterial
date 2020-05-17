import { BookDrawerModule } from './book-drawer.module';

describe('BookDrawerModule', () => {
  let bookDrawerModule: BookDrawerModule;

  beforeEach(() => {
    bookDrawerModule = new BookDrawerModule();
  });

  it('should create an instance', () => {
    expect(bookDrawerModule).toBeTruthy();
  });
});
