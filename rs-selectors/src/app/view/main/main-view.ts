import View from '../view';
import './main.css';

const CssClasses = {
  MAIN: 'main',
};
// const TEXT = 'SPA example';

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

    // если есть внутренние дочерние элементы
    while (currentElement.firstElementChild) {
      currentElement.firstElementChild.remove();
    }

    currentElement.append(element);
  }
}
