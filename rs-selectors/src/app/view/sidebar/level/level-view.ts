import View from '../../view';
import { IElCreationParams, ILevelParams } from '../../../../types/types';
import './level.css';

const CssClasses = {
  ITEM: 'level-item',
  ITEM_SELECTED: 'level-item__selected',
  ITEM_COMPLETED: 'level-item__completed',
};

export default class LevelView extends View {
  levelElements: LevelView[];

  constructor(levelParams: ILevelParams, levelElements: LevelView[]) {
    const params: IElCreationParams = {
      tag: 'div',
      classNames: [CssClasses.ITEM],
      textContent: levelParams.name,
      callback: levelParams.callback,
    };
    super(params);

    this.levelElements = levelElements;
    this.configureView();
  }

  setSelectedStatus(): void {
    this.levelElements.forEach((levelElement) => levelElement.setNotSelectedStatus());

    const element = this.elementCreator.getElement();
    element.classList.add(CssClasses.ITEM_SELECTED);
  }

  setNotSelectedStatus(): void {
    const element = this.elementCreator.getElement();
    element.classList.remove(CssClasses.ITEM_SELECTED);
  }

  setCompletedStatus(): void {
    const element = this.elementCreator.getElement();
    element.classList.add(CssClasses.ITEM_COMPLETED);
  }

  setNotCompletedStatus(): void {
    this.levelElements.forEach((levelElement) => {
      levelElement.getHtmlElement().classList.remove('CssClasses.ITEM_COMPLETED');
    });
  }

  configureView(): void {
    const element = this.elementCreator.getElement();
    element.addEventListener('click', () => this.setSelectedStatus());
  }
}
