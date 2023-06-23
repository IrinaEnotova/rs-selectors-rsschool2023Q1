import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';
import './pet.css';
import { ILevel } from '../../../../../types/types';

const CssClasses = {
  CONTAINER: 'shelter',
  PET: 'pet-item',
};

export default class PETSDELETEView extends View {
  constructor(tagName: string, levelData: ILevel) {
    const params = {
      tag: tagName,
      classNames: [CssClasses.CONTAINER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelData);
  }

  configureView(levelData: ILevel): void {
    // здесь продумать как изменять содержимое приюта, пока формирую рыбу
    const paramsLabel = {
      tag: 'label',
      classNames: [CssClasses.PET],
      textContent: levelData.mainTitle,
      callback: null,
    };
    const labelCreator = new ElementCreator(paramsLabel);

    this.elementCreator.addInnerElement(labelCreator);
  }
}
