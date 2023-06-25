import ElementCreator from '../../../../../../util/element-creator';
import CssEditorContentView from './css-editor-content/css-editor-content';
import View from '../../../../../view';

const CssClasses = {
  CONTAINER: 'css-editor_container',
  MARKUP: 'editor_markup',
  CONTENT: 'css-editor_content',
};

export default class CssEditorBoxView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    let content = '';
    for (let i = 1; i <= 20; i += 1) {
      content += `${i}\n`;
    }
    const paramsMarkup = {
      tag: 'div',
      classNames: [CssClasses.MARKUP],
      textContent: content,
      callback: null,
    };

    const markupCreator = new ElementCreator(paramsMarkup);
    this.elementCreator.addInnerElement(markupCreator);
    this.elementCreator.addInnerElement(new CssEditorContentView(levelId).getHtmlElement());
  }
}
