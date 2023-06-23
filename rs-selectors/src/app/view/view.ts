import ElementCreator from '../util/element-creator';
import { IElCreationParams } from '../../types/types';

export default abstract class View {
  elementCreator: ElementCreator;

  constructor(params: IElCreationParams) {
    this.elementCreator = this.createView(params);
  }

  getHtmlElement(): HTMLElement {
    return this.elementCreator.getElement();
  }

  createView(params: IElCreationParams): ElementCreator {
    const elementCreator = new ElementCreator({
      tag: params.tag,
      classNames: params.classNames,
      textContent: params.textContent,
      callback: params.callback,
    });

    return elementCreator;
  }
}
