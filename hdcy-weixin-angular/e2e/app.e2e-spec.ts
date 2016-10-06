import { HdcyWeixinAngularPage } from './app.po';

describe('hdcy-weixin-angular App', function() {
  let page: HdcyWeixinAngularPage;

  beforeEach(() => {
    page = new HdcyWeixinAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
