/* eslint-disable max-lines-per-function */
import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import './pet.css';

const CssClasses = {
  TABLE: 'table',
  PET: 'pet',
  CAT: 'cat',
  DOG: 'dog',
  SMALL_DOG: 'small-dog',
  DOG_BOWL: 'dog-bowl',
  HUMSTER: 'humster',
  CAT_BOWL: 'cat-bowl',
  CAT_PILLOW: 'cat-pillow',
  DOG_PILLOW: 'dog-pillow',
  PILLOW: 'pillow',
  REQUIRED: 'pet-required',
};

export default class PetView extends View {
  constructor(levelId: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.TABLE],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(levelId);
  }

  configureView(levelId: number): void {
    if (levelId === 1) {
      const paramsHumster = {
        tag: 'humster',
        classNames: [CssClasses.PET, CssClasses.HUMSTER],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG],
        textContent: '',
        callback: null,
      };
      const humsterCreator = new ElementCreator(paramsHumster);
      const catCreator = new ElementCreator(paramsCat);
      const dogCreator = new ElementCreator(paramsDog);
      this.elementCreator.addInnerElement(humsterCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(dogCreator);
    }
    if (levelId === 2) {
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT],
        textContent: '',
        callback: null,
      };
      const dogCreator = new ElementCreator(paramsDog);
      const catCreator = new ElementCreator(paramsCat);
      const dogCreator2 = new ElementCreator(paramsDog);
      this.elementCreator.addInnerElement(dogCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(dogCreator2);
    }
    if (levelId === 3) {
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT],
        textContent: '',
        callback: null,
      };
      const paramsCatBowl = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT_BOWL, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const catBowlCreator = new ElementCreator(paramsCatBowl);
      const catCreator = new ElementCreator(paramsCat);
      const dogCreator = new ElementCreator(paramsDog);
      this.elementCreator.addInnerElement(catBowlCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(dogCreator);
    }
    if (levelId === 4) {
      const paramsCatPillow = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.CAT_PILLOW, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT],
        textContent: '',
        callback: null,
      };
      const paramsDogPillow = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG_PILLOW],
        textContent: '',
        callback: null,
      };
      const dogPillowCreator = new ElementCreator(paramsDogPillow);
      const catCreator = new ElementCreator(paramsCat);
      const catPillowCreator = new ElementCreator(paramsCatPillow);
      this.elementCreator.addInnerElement(dogPillowCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(catPillowCreator);
    }
    if (levelId === 5) {
      const paramsSmallDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.SMALL_DOG, CssClasses.DOG, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT],
        textContent: '',
        callback: null,
      };
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG],
        textContent: '',
        callback: null,
      };
      const dogSmallCreator = new ElementCreator(paramsSmallDog);
      const dogSmallCreator2 = new ElementCreator(paramsSmallDog);
      const catCreator = new ElementCreator(paramsCat);
      const dogCreator = new ElementCreator(paramsDog);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(dogSmallCreator);
      this.elementCreator.addInnerElement(dogCreator);
      this.elementCreator.addInnerElement(dogSmallCreator2);
    }
    if (levelId === 6) {
      const paramsHumster = {
        tag: 'humster',
        classNames: [CssClasses.PET, CssClasses.HUMSTER],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const humsterCreator = new ElementCreator(paramsHumster);
      const humsterCreator2 = new ElementCreator(paramsHumster);
      const catCreator = new ElementCreator(paramsCat);
      const dogCreator = new ElementCreator(paramsDog);
      this.elementCreator.addInnerElement(humsterCreator);
      this.elementCreator.addInnerElement(dogCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(humsterCreator2);
    }
    if (levelId === 7) {
      const paramsSmallDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.SMALL_DOG, CssClasses.DOG, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsCat = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsCatBowl = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT_BOWL, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsHumster = {
        tag: 'humster',
        classNames: [CssClasses.PET, CssClasses.HUMSTER, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const dogSmallCreator = new ElementCreator(paramsSmallDog);
      const humsterCreator = new ElementCreator(paramsHumster);
      const catBowlCreator = new ElementCreator(paramsCatBowl);
      const dogCreator = new ElementCreator(paramsDog);
      const catCreator = new ElementCreator(paramsCat);
      this.elementCreator.addInnerElement(catBowlCreator);
      this.elementCreator.addInnerElement(catCreator);
      this.elementCreator.addInnerElement(dogSmallCreator);
      this.elementCreator.addInnerElement(dogCreator);
      this.elementCreator.addInnerElement(humsterCreator);
    }
    if (levelId === 8) {
      const paramsSmallDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.SMALL_DOG, CssClasses.DOG],
        textContent: '',
        callback: null,
      };
      const paramsDogBowl = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG, CssClasses.DOG_BOWL],
        textContent: '',
        callback: null,
      };
      const paramsDog = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG],
        textContent: '',
        callback: null,
      };
      const paramsDogPillow = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG, CssClasses.DOG_PILLOW, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const dogSmallCreator = new ElementCreator(paramsSmallDog);
      const dogBowlCreator = new ElementCreator(paramsDogBowl);
      const dogCreator = new ElementCreator(paramsDog);
      const dogPillowCreator = new ElementCreator(paramsDogPillow);
      this.elementCreator.addInnerElement(dogSmallCreator);
      this.elementCreator.addInnerElement(dogBowlCreator);
      this.elementCreator.addInnerElement(dogCreator);
      this.elementCreator.addInnerElement(dogPillowCreator);
    }
    if (levelId === 9) {
      const paramsCatPillow = {
        tag: 'cat',
        classNames: [CssClasses.PET, CssClasses.CAT_PILLOW],
        textContent: '',
        callback: null,
      };
      const paramsPillow = {
        tag: 'pillow',
        classNames: [CssClasses.PET, CssClasses.PILLOW, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsDogPillow = {
        tag: 'dog',
        classNames: [CssClasses.PET, CssClasses.DOG_PILLOW],
        textContent: '',
        callback: null,
      };
      const catPillowCreator = new ElementCreator(paramsCatPillow);
      const pillowCreator = new ElementCreator(paramsPillow);
      const dogPillowCreator = new ElementCreator(paramsDogPillow);
      const pillowCreator2 = new ElementCreator(paramsPillow);
      this.elementCreator.addInnerElement(catPillowCreator);
      this.elementCreator.addInnerElement(pillowCreator);
      this.elementCreator.addInnerElement(dogPillowCreator);
      this.elementCreator.addInnerElement(pillowCreator2);
    }
    if (levelId === 10) {
      const paramsHumsterReq = {
        tag: 'humster',
        classNames: [CssClasses.PET, CssClasses.HUMSTER, CssClasses.REQUIRED],
        textContent: '',
        callback: null,
      };
      const paramsHumster = {
        tag: 'humster',
        classNames: [CssClasses.PET, CssClasses.HUMSTER],
        textContent: '',
        callback: null,
      };
      const humsterCreator = new ElementCreator(paramsHumsterReq);
      const humsterCreator2 = new ElementCreator(paramsHumster);
      const humsterCreator3 = new ElementCreator(paramsHumster);
      this.elementCreator.addInnerElement(humsterCreator);
      this.elementCreator.addInnerElement(humsterCreator2);
      this.elementCreator.addInnerElement(humsterCreator3);
    }
  }
}
