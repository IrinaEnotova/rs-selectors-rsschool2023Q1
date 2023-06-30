import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';
import SocialsView from './socials/socials-view';
import './header.css';

const CssClasses = {
  HEADER: 'header',
  LOGO: 'header_logo',
  CONTACT: 'header_socials',
  SCHOOL_LOGO: 'school_logo',
  YEAR_OF_CREATION: 'footer_year',
};

export default class HeaderView extends View {
  constructor() {
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    const paramsLogo = {
      tag: 'div',
      classNames: [CssClasses.LOGO],
      textContent: 'RS CSS Paws',
      callback: null,
    };
    const logoCreator = new ElementCreator(paramsLogo);
    this.elementCreator.addInnerElement(logoCreator);
    this.elementCreator.addInnerElement(new SocialsView().getHtmlElement());
  }
}
