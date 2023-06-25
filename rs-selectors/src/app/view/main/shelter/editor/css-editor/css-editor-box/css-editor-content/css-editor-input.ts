import dataLevels from '../../../../../../../util/dataLevels';
import ElementCreator from '../../../../../../../util/element-creator';
import InputCreator from '../../../../../../../util/input-creator';
import View from '../../../../../../view';

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
            console.log('right');
          } else {
            console.log('wrong');
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
      callback: null,
    };

    const btnCreator = new ElementCreator(paramsBtn);
    this.elementCreator.addInnerElement(btnCreator);
  }
}
