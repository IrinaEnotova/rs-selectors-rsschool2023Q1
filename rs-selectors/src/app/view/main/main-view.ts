import View from '../view';

const CssClasses = {
  MAIN: 'main',
};

export default class MainView extends View {
  constructor() {
    const params = {
      tag: 'main',
      classNames: [CssClasses.MAIN],
      textContent: '',
      callback: null,
    };
    super(params);
  }

  setContent(view: View): void {
    const element = view.getHtmlElement();
    const currentElement = this.elementCreator.getElement();

    while (currentElement.firstElementChild) {
      currentElement.firstElementChild.remove();
    }

    currentElement.append(element);
  }
}
