import { GopiTestAppPage } from './app.po';

describe('gopi-test-app App', () => {
  let page: GopiTestAppPage;

  beforeEach(() => {
    page = new GopiTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
