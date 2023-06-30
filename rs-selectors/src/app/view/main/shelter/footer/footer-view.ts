import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';
import './footer.css';

const CssClasses = {
  FOOTER: 'footer',
  SCHOOL_LOGO: 'school_logo',
  YEAR_OF_CREATION: 'footer_year',
};

export default class FooterView extends View {
  constructor() {
    const params = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    const paramsSchool = {
      tag: 'a',
      classNames: [CssClasses.SCHOOL_LOGO],
      textContent: '',
      callback: null,
    };
    const schoolCreator = new ElementCreator(paramsSchool);
    const contactLink = schoolCreator.getElement() as HTMLLinkElement;
    contactLink.href = 'https://rs.school/js/';
    this.elementCreator.addInnerElement(schoolCreator);

    const paramsYear = {
      tag: 'div',
      classNames: [CssClasses.YEAR_OF_CREATION],
      textContent: '2023',
      callback: null,
    };
    const yearCreator = new ElementCreator(paramsYear);
    this.elementCreator.addInnerElement(yearCreator);
  }
}
