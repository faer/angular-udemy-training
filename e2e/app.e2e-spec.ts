import { AngularUdemyTrainingPage } from './app.po';

describe('angular-udemy-training App', () => {
  let page: AngularUdemyTrainingPage;

  beforeEach(() => {
    page = new AngularUdemyTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
