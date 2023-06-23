import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import './pet.css';

const CssClasses = {
  TABLE: 'table',
  PET: 'pet',
  CAT: 'cat',
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
      classNames: [CssClasses.PET, CssClasses.CAT],
      textContent: '',
      callback: null,
    };
    const catCreator = new ElementCreator(paramsCat);
    const catCreator1 = new ElementCreator(paramsCat);
    this.elementCreator.addInnerElement(catCreator);
    this.elementCreator.addInnerElement(catCreator1);
  }
}
