import { MapSketchPage } from './app.po';

describe('map-sketch App', () => {
  let page: MapSketchPage;

  beforeEach(() => {
    page = new MapSketchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
