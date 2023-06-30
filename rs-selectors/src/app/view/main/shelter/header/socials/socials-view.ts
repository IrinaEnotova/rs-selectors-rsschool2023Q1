import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';

const CssClasses = {
  SOCIALS_CONTAINER: 'socials-container',
  CONTACT: 'header_socials',
  SCHOOL_LOGO: 'school_logo',
  YEAR_OF_CREATION: 'header_year',
};

export default class SocialsView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.SOCIALS_CONTAINER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
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

    const paramsYear = {
      tag: 'div',
      classNames: [CssClasses.YEAR_OF_CREATION],
      textContent: '2023',
      callback: null,
    };
    const yearCreator = new ElementCreator(paramsYear);
    this.elementCreator.addInnerElement(yearCreator);

    const paramsSchool = {
      tag: 'a',
      classNames: [CssClasses.SCHOOL_LOGO],
      textContent: '',
      callback: null,
    };
    const schoolCreator = new ElementCreator(paramsSchool);
    const schoolLink = schoolCreator.getElement() as HTMLLinkElement;
    schoolLink.href = 'https://rs.school/js/';
    this.elementCreator.addInnerElement(schoolCreator);
  }
}
