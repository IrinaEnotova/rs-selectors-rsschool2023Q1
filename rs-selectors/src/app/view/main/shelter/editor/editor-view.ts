import View from '../../../view';
import CssEditorView from './css-editor/css-editor-view';
import HtmlEditorView from './html-viewer/html-viewer-view';
import './editor.css';

const CssClasses = {
  EDITOR_WRAPPER: 'editor-wrapper',
};

export default class EditorView extends View {
  constructor(levelId: number, usedHelp: boolean) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.EDITOR_WRAPPER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId, usedHelp);
  }

  configureView(levelId: number, usedHelp: boolean): void {
    this.elementCreator.addInnerElement(new CssEditorView(levelId, usedHelp).getHtmlElement());
    this.elementCreator.addInnerElement(new HtmlEditorView(levelId).getHtmlElement());
  }
}
