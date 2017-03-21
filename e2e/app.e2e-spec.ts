import { NgcliDepsTrackerPage } from './app.po';

describe('ngcli-deps-tracker App', () => {
  let page: NgcliDepsTrackerPage;

  beforeEach(() => {
    page = new NgcliDepsTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
