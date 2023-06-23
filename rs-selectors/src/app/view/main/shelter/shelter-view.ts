import View from '../../view';
import './shelter.css';
import HeaderView from './header/header-view';
import ElementCreator from '../../../util/element-creator';
import TableView from './table/table-view';
import EditorView from './editor/editor-view';

const CssClasses = {
  SHELTER: 'shelter-wrapper',
};

export default class ShelterView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: [CssClasses.SHELTER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  // здесь тоже надо предусмотреть смену приюта
  configureView(): void {
    this.elementCreator.addInnerElement(new HeaderView().getHtmlElement());
    // здесь будет динамика - должен меняться заголовок
    this.elementCreator.addInnerElement(
      new ElementCreator({ tag: 'h1', classNames: ['main_heading'], textContent: 'Select an animal', callback: null }),
    );
    // здесь будет динамика - плюс должно открываться модальное окно - поменять колбек
    this.elementCreator.addInnerElement(
      new ElementCreator({ tag: 'button', classNames: ['main_help'], textContent: "Help, I'm stuck!", callback: null }),
    );
    // здесь должны появляться животные
    this.elementCreator.addInnerElement(new TableView().getHtmlElement());
    // здесь нужно добавить логику для инпута
    this.elementCreator.addInnerElement(new EditorView().getHtmlElement());
  }
}
