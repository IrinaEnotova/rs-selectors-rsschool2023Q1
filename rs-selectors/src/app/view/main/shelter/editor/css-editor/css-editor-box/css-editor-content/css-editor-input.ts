import ElementCreator from '../../../../../../../util/element-creator';
import InputCreator from '../../../../../../../util/input-creator';
import View from '../../../../../../view';

const CssClasses = {
  BOX: 'css-editor_input-box',
  INPUT: 'css-editor_input',
  BTN: 'css-editor_btn',
};

export default class CssEditorInputBoxView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.BOX],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView(): void {
    const paramsInput = {
      tag: 'input',
      classNames: [CssClasses.INPUT],
      textContent: '',
      callback: (event: Event): void => {
        const keyboardEvent = event as KeyboardEvent;
        const keyCode = keyboardEvent.code;
        if (keyCode === 'Enter') {
          console.log('Done');
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
