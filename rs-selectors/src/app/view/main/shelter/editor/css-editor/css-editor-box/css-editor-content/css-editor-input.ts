/* eslint-disable max-lines-per-function */
// eslint-disable-next-line import/no-cycle
import { importMain } from '../../../../../../../app';
import dataLevels from '../../../../../../../util/dataLevels';
import ElementCreator from '../../../../../../../util/element-creator';
import InputCreator from '../../../../../../../util/input-creator';
import ShelterView from '../../../../shelter-view';
import View from '../../../../../../view';
import { levelsforImport } from '../../../../../../sidebar/level/level-view';

const CssClasses = {
  BOX: 'css-editor_input-box',
  INPUT: 'css-editor_input',
  BTN: 'css-editor_btn',
};

export default class CssEditorInputBoxView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.BOX],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    const paramsInput = {
      tag: 'input',
      classNames: [CssClasses.INPUT],
      textContent: '',
      callback: (event: Event): void => {
        const keyboardEvent = event as KeyboardEvent;
        const keyCode = keyboardEvent.code;
        const input = keyboardEvent.target as HTMLInputElement;
        const rightAnswer = dataLevels[levelId - 1].selector;

        if (keyCode === 'Enter') {
          if (input.value === rightAnswer) {
            // const currentLevel = document.querySelector('.level-item__selected') as HTMLElement & LevelView;
            // currentLevel.className = 'level-item level-item__completed';
            // const levels = document.querySelectorAll('.level-item') as NodeListOf<HTMLElement> & LevelView[];
            // levels[levelId].className = 'level-item level-item__selected';
            levelsforImport.forEach((level, index) => {
              if (level.getHtmlElement().classList.contains('level-item__selected')) {
                level.getHtmlElement().classList.remove('level-item__selected');
                level.getHtmlElement().classList.add('level-item__completed');
              }
              if (index === levelId) {
                level.getHtmlElement().classList.add('level-item__selected');
              }
            });
            importMain.setContent(new ShelterView(levelId + 1));
          } else {
            const editor = document.querySelector('.editor-wrapper') as HTMLElement;
            editor.classList.add('shake');
            console.log('wrong');
            setTimeout(() => {
              editor.classList.remove('shake');
            }, 1000);
          }
        }
      },
    };
    const inputCreator = new InputCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator);

    const paramsBtn = {
      tag: 'button',
      classNames: [CssClasses.BTN],
      textContent: 'Enter',
      callback: (): void => {
        const input = document.querySelector('input') as HTMLInputElement;
        const rightAnswer = dataLevels[levelId - 1].selector;
        if (input.value === rightAnswer) {
          console.log('right');
        } else {
          const editor = document.querySelector('.editor-wrapper') as HTMLElement;
          editor.classList.add('shake');
          console.log('wrong');
          setTimeout(() => {
            editor.classList.remove('shake');
          }, 1000);
        }
      },
    };

    const btnCreator = new ElementCreator(paramsBtn);
    this.elementCreator.addInnerElement(btnCreator);
  }
}
