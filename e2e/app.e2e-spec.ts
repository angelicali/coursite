import { CoursitePage } from './app.po';

describe('coursite App', function() {
  let page: CoursitePage;

  beforeEach(() => {
    page = new CoursitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
