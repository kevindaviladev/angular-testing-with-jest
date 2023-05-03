import { WebsitePipe } from './website.pipe';

describe('Website Pipe', () => {
  let webSitePipe: WebsitePipe;

  beforeEach(() => {
    webSitePipe = new WebsitePipe();
  });

  it('', () => {
    const response = webSitePipe.transform('youtube.com/kevindaviladev');
    expect(response).toBe('https://youtube.com/kevindaviladev');
  });
});
