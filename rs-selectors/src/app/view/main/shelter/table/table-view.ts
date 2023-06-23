import View from '../../../view';
import PetView from './pets-on-table/pet-view';
import './table.css';

const CssClasses = {
  TABLE_WRAPPER: 'table-wrapper',
};

export default class TableView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.TABLE_WRAPPER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    this.elementCreator.addInnerElement(new PetView().getHtmlElement());
  }
}
