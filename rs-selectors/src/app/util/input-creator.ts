import ElementCreator from './element-creator';
import { IParamsInput } from '../../types/types';
import dataLevels from './dataLevels';

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
    this.setPlaceholder();
  }

  override setCallback(callback: ((event: Event) => void) | null): void {
    if (callback) {
      this.element?.addEventListener('keyup', (event) => callback(event));
    }
  }

  setValue(levelId: number, usedHelp: boolean): void {
    const input = this.element as HTMLInputElement;
    input.value = usedHelp ? dataLevels[levelId - 1].selector : '';
  }

  setPlaceholder(): void {
    const element = this.element as HTMLInputElement;
    element.placeholder = 'Type here!';
  }
}
