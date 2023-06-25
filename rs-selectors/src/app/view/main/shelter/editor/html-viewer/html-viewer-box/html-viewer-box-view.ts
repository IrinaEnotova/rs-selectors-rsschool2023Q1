import ElementCreator from '../../../../../../util/element-creator';
import HtmlViewerContentView from './html-viewer-content/html-viewer-content';
import View from '../../../../../view';

const CssClasses = {
  CONTAINER: 'html-viewer_container',
  MARKUP: 'editor_markup',
  CONTENT: 'html-viewer_content',
};

export default class HtmlViewerBoxView extends View {
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
    this.elementCreator.addInnerElement(new HtmlViewerContentView(levelId).getHtmlElement());
  }
}
