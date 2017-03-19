import { ShakingLoginScreenPage } from './app.po';

describe('shaking-login-screen App', function() {
  let page: ShakingLoginScreenPage;

  beforeEach(() => {
    page = new ShakingLoginScreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
