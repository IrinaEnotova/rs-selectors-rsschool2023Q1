import View from '../../../view';
import PetView from './pets-on-table/pet-view';
import './table.css';

const CssClasses = {
  TABLE_WRAPPER: 'table-wrapper',
};

export default class TableView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.TABLE_WRAPPER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    this.elementCreator.addInnerElement(new PetView(levelId).getHtmlElement());
  }
}
