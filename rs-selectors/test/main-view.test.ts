import MainView from '../src/app/view/main/main-view';
import SocialsView from '../src/app/view/main/shelter/header/socials/socials-view';

describe('Check methods of View through MainView', () => {
  const testMain = new MainView();
  const testHeader = new SocialsView();
  testMain.setContent(testHeader);

  it('should return HTMLElement', () => {
    expect(testMain.getHtmlElement()).toBeInstanceOf(HTMLElement);
  });

  it('should set view-content for main', () => {
    expect(testMain.getHtmlElement().contains(testHeader.getHtmlElement())).toBeTruthy();
  });
});
