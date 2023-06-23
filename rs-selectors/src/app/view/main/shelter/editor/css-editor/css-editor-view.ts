import ElementCreator from '../../../../../util/element-creator';
import CssEditorBoxView from './css-editor-box/css-editor-box-view';
import View from '../../../../view';

const CssClasses = {
  EDITOR: 'editor-pane',
  FILENAME: 'css-editor_filename',
  EDITOR_NAME: 'css-editor_name',
  CONTAINER: 'css-editor_container',
};

export default class CssEditorView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.EDITOR],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    const paramsFilename = {
      tag: 'div',
      classNames: [CssClasses.FILENAME],
      textContent: 'style.css',
      callback: null,
    };

    const paramsName = {
      tag: 'div',
      classNames: [CssClasses.EDITOR_NAME],
      textContent: 'CSS Editor',
      callback: null,
    };

    const filenameCreator = new ElementCreator(paramsFilename);
    const editorNameCreator = new ElementCreator(paramsName);
    this.elementCreator.addInnerElement(filenameCreator);
    this.elementCreator.addInnerElement(editorNameCreator);
    this.elementCreator.addInnerElement(new CssEditorBoxView().getHtmlElement());
  }
}
