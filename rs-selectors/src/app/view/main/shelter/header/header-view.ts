import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';
import './header.css';

const CssClasses = {
  HEADER: 'header',
  LOGO: 'header_logo',
  CONTACT: 'header_socials',
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

    const paramsContact = {
      tag: 'a',
      classNames: [CssClasses.CONTACT],
      textContent: 'Contact me',
      callback: null,
    };
    const contactCreator = new ElementCreator(paramsContact);
    const contactLink = contactCreator.getElement() as HTMLLinkElement;
    contactLink.href = 'https://github.com/IrinaEnotova';
    this.elementCreator.addInnerElement(contactCreator);
  }
}
