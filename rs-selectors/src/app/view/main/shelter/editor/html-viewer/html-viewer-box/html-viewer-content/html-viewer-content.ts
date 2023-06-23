import ElementCreator from '../../../../../../../util/element-creator';
import View from '../../../../../../view';

const CssClasses = {
  CONTENT: 'html-viewer_content',
  HELP: 'html-viewer_help-text',
};

export default class HtmlViewerContentView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.CONTENT],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  // здесь нужно пробрасывать разметку при смене уровней
  configureView(): void {
    const content = 'Here should be correct tags';
    const paramsHelp = {
      tag: 'div',
      classNames: [CssClasses.HELP],
      textContent: content,
      callback: null,
    };

    const helpCreator = new ElementCreator(paramsHelp);
    this.elementCreator.addInnerElement(helpCreator);
  }
}
