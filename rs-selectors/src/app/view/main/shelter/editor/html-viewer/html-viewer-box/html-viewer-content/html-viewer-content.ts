import dataLevels from '../../../../../../../util/dataLevels';
import ElementCreator from '../../../../../../../util/element-creator';
import View from '../../../../../../view';

const CssClasses = {
  CONTENT: 'html-viewer_content',
  HELP: 'html-viewer_help-text',
};

export default class HtmlViewerContentView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.CONTENT],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  // здесь нужно пробрасывать разметку при смене уровней
  configureView(levelId: number): void {
    const content = dataLevels[levelId - 1].markup;
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
