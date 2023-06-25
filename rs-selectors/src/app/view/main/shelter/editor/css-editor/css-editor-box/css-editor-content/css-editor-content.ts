import ElementCreator from '../../../../../../../util/element-creator';
import View from '../../../../../../view';
import CssEditorInputBoxView from './css-editor-input';

const CssClasses = {
  CONTENT: 'css-editor_content',
  HELP: 'css-editor_help-text',
};

export default class CssEditorContentView extends View {
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

  configureView(levelId: number): void {
    const content =
      '{\n/* Styles would go here. */\n}\n\n/*\nType a number to skip to a level.\nExample → "5" for level 5\n*/';
    const paramsHelp = {
      tag: 'div',
      classNames: [CssClasses.HELP],
      textContent: content,
      callback: null,
    };

    this.elementCreator.addInnerElement(new CssEditorInputBoxView(levelId).getHtmlElement());
    const helpCreator = new ElementCreator(paramsHelp);
    this.elementCreator.addInnerElement(helpCreator);
  }
}
