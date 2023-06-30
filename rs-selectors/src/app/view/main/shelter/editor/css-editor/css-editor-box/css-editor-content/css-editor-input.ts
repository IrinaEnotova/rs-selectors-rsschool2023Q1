/* eslint-disable max-lines-per-function */
// eslint-disable-next-line import/no-extraneous-dependencies
import JSConfetti from 'js-confetti';
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
  constructor(levelId: number, usedHelp: boolean) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.BOX],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId, usedHelp);
  }

  configureView(levelId: number, usedHelp: boolean): void {
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
            this.getRightAnswer(levelId, usedHelp);
          } else {
            this.getWrongAnswer();
          }
        }
      },
    };
    const inputCreator = new InputCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator);
    inputCreator.setValue(levelId, usedHelp);
    const paramsBtn = {
      tag: 'button',
      classNames: [CssClasses.BTN],
      textContent: 'Enter',
      callback: (): void => {
        const input = document.querySelector('input') as HTMLInputElement;
        const rightAnswer = dataLevels[levelId - 1].selector;
        if (input.value === rightAnswer) {
          this.getRightAnswer(levelId, usedHelp);
        } else {
          this.getWrongAnswer();
        }
      },
    };
    const btnCreator = new ElementCreator(paramsBtn);
    this.elementCreator.addInnerElement(btnCreator);
  }

  getRightAnswer(levelId: number, usedHelp: boolean): void {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🐕', '🐱', '🐹', '✨', '🦴', '💗'],
      emojiSize: 20,
      confettiNumber: 100,
    });
    levelsforImport.forEach((level, index) => {
      if (level.getHtmlElement().classList.contains('level-item__selected')) {
        level.getHtmlElement().classList.remove('level-item__selected');
        if (usedHelp === false) {
          level.getHtmlElement().classList.add('level-item__completed');
        } else {
          level.getHtmlElement().classList.add('help-used');
        }
      }
      if (index === levelId) {
        level.getHtmlElement().classList.add('level-item__selected');
      }
    });
    if (levelId < levelsforImport.length) {
      importMain.setContent(new ShelterView(levelId + 1));
    } else {
      levelsforImport[0].getHtmlElement().classList.add('level-item__selected');
      importMain.setContent(new ShelterView(1));
    }
  }

  getWrongAnswer(): void {
    const editor = document.querySelector('.editor-wrapper') as HTMLElement;
    editor.classList.add('shake');
    console.log('wrong');
    setTimeout(() => {
      editor.classList.remove('shake');
    }, 1000);
  }
}
