import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import './pet.css';

const CssClasses = {
  TABLE: 'table',
  PET: 'pet',
  CAT: 'cat',
  DOG: 'dog',
  REQUIRED: 'pet-required',
};

export default class PetView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.TABLE],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    const paramsCat = {
      tag: 'cat',
      classNames: [CssClasses.PET, CssClasses.CAT, CssClasses.REQUIRED],
      textContent: '',
      callback: null,
    };
    const paramsDog = {
      tag: 'dog',
      classNames: [CssClasses.PET, CssClasses.DOG],
      textContent: '',
      callback: null,
    };
    const catCreator = new ElementCreator(paramsCat);
    const dogCreator = new ElementCreator(paramsDog);
    this.elementCreator.addInnerElement(catCreator);
    this.elementCreator.addInnerElement(dogCreator);
  }
}
