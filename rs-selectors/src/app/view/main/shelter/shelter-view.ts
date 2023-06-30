import View from '../../view';
import './shelter.css';
import HeaderView from './header/header-view';
import ElementCreator from '../../../util/element-creator';
import TableView from './table/table-view';
// eslint-disable-next-line import/no-cycle
import EditorView from './editor/editor-view';
import dataLevels from '../../../util/dataLevels';

const CssClasses = {
  SHELTER: 'shelter-wrapper',
};

export default class ShelterView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'section',
      classNames: [CssClasses.SHELTER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    this.elementCreator.addInnerElement(new HeaderView().getHtmlElement());
    this.elementCreator.addInnerElement(
      new ElementCreator({
        tag: 'h1',
        classNames: ['main_heading'],
        textContent: dataLevels[levelId - 1].mainTitle,
        callback: null,
      }),
    );
    let usedHelp = false;
    this.elementCreator.addInnerElement(
      new ElementCreator({
        tag: 'button',
        classNames: ['main_help'],
        textContent: "Help, I'm stuck!",
        callback: (event): void => {
          const target = event.target as EventTarget;
          if (target instanceof HTMLElement) {
            target.textContent = dataLevels[levelId - 1].helpInfo;
            target.classList.add('help-activated');
            const input = document.querySelector('input') as HTMLInputElement;
            input.value = dataLevels[levelId - 1].selector;
            usedHelp = true;
            const editorWrapper = document.querySelector('.editor-wrapper') as HTMLElement;
            editorWrapper.remove();
            this.elementCreator.addInnerElement(new EditorView(levelId, usedHelp).getHtmlElement());
          }
        },
      }),
    );
    this.elementCreator.addInnerElement(new TableView(levelId).getHtmlElement());
    this.elementCreator.addInnerElement(new EditorView(levelId, usedHelp).getHtmlElement());
  }
}
