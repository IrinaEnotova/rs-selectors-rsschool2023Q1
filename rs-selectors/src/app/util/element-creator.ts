import { IElCreationParams } from '../../types/types';

export default class ElementCreator {
  param?: {
    tag: string;
    classNames: string[];
    textContent: string;
    callback: ((event: Event) => void) | null;
  };

  element: HTMLElement | null;

  constructor(param: IElCreationParams) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: IElCreationParams): void {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.classNames);
    if (param.textContent) {
      this.setTextContent(param.textContent);
    }
    if (param.callback) {
      this.setCallback(param.callback);
    }
  }

  getElement(): HTMLElement {
    if (this.element) {
      return this.element;
    }
    throw new Error("HTMLElement wasn't created");
  }

  addInnerElement(element: HTMLElement | ElementCreator): void {
    if (element instanceof ElementCreator) {
      this.element?.append(element.getElement());
    } else {
      this.element?.append(element);
    }
  }

  setCssClasses(cssClasses: string[]): void {
    cssClasses.forEach((className) => {
      this.element?.classList.add(className);
    });
  }

  setTextContent(text: string): void {
    if (this.element) {
      this.element.textContent = text;
    }
  }

  setCallback(callback: ((event: Event) => void) | null): void {
    if (callback) {
      this.element?.addEventListener('click', (event) => callback(event));
    }
  }
}
