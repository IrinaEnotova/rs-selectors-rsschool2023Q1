import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import HtmlViewerBoxView from './html-viewer-box/html-viewer-box-view';

const CssClasses = {
  EDITOR: 'editor-pane',
  FILENAME: 'html-viewer_filename',
  EDITOR_NAME: 'html-viewer_name',
  CONTAINER: 'html-viewer_container',
};

export default class HtmlEditorView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.EDITOR],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    const paramsFilename = {
      tag: 'div',
      classNames: [CssClasses.FILENAME],
      textContent: 'index.html',
      callback: null,
    };

    const paramsName = {
      tag: 'div',
      classNames: [CssClasses.EDITOR_NAME],
      textContent: 'HTML Viewer',
      callback: null,
    };

    const filenameCreator = new ElementCreator(paramsFilename);
    const editorNameCreator = new ElementCreator(paramsName);
    this.elementCreator.addInnerElement(filenameCreator);
    this.elementCreator.addInnerElement(editorNameCreator);
    this.elementCreator.addInnerElement(new HtmlViewerBoxView(levelId).getHtmlElement());
  }
}
