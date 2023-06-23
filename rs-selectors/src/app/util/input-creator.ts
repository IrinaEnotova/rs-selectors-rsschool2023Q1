import ElementCreator from './element-creator';
import { IParamsInput } from '../../types/types';

export default class InputCreator extends ElementCreator {
  override createElement(param: IParamsInput): void {
    this.element = document.createElement('input');
    this.setCssClasses(param.classNames);
    if (param.textContent) {
      this.setTextContent(param.textContent);
    }
    if (param.callback) {
      this.setCallback(param.callback);
    }
  }

  override setCallback(callback: ((event: Event) => void) | null): void {
    if (callback) {
      this.element?.addEventListener('keyup', (event) => callback(event));
    }
  }
}
