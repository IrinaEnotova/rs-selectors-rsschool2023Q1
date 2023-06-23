/* eslint-disable max-lines-per-function */
import { IElCreationParams, ISidebarLevel } from '../../../types/types';
import ElementCreator from '../../util/element-creator';
import MainView from '../main/main-view';
import ShelterView from '../main/shelter/shelter-view';
import View from '../view';
import LevelView from './level/level-view';
import './sidebar.css';

const CssClasses = {
  SIDEBAR: 'levels-sidebar',
  LEVELS: 'levels-container',
};

const START_LEVEL_INDEX = 0;

export default class SidebarView extends View {
  levelElements: LevelView[];

  constructor(mainComponent: MainView) {
    const params: IElCreationParams = {
      tag: 'aside',
      classNames: [CssClasses.SIDEBAR],
    };
    super(params);

    this.levelElements = [];
    this.configureView(mainComponent);
  }

  configureView(mainComponent: MainView): void {
    this.elementCreator.addInnerElement(
      new ElementCreator({ tag: 'h2', classNames: ['sidebar-heading'], textContent: 'Choose a level', callback: null }),
    );

    const paramsLevelsCont: IElCreationParams = {
      tag: 'div',
      classNames: [CssClasses.LEVELS],
      textContent: '',
      callback: null,
    };
    const creatorLevelCont = new ElementCreator(paramsLevelsCont);
    this.elementCreator.addInnerElement(creatorLevelCont);

    const levels = this.getLevels(mainComponent);

    levels.forEach((level, index) => {
      const levelElement = new LevelView(level, this.levelElements);
      creatorLevelCont.addInnerElement(levelElement.getHtmlElement());

      this.levelElements.push(levelElement);
      if (index === START_LEVEL_INDEX) {
        level.callback();
        levelElement.setSelectedStatus();
      }
    });

    // сделать логику для кнопки сброса уровней - назначить колбек
    this.elementCreator.addInnerElement(
      new ElementCreator({ tag: 'button', classNames: ['reset-btn'], textContent: 'Reset progress', callback: null }),
    );
  }

  getLevels(mainComponent: MainView): ISidebarLevel[] {
    // const editorView = new EditorView();
    const shelterView = new ShelterView();

    const levels = [
      {
        name: 'Level 1',
        callback: (): void => mainComponent.setContent(shelterView),
      },
      // здесь просто тренировка - нужно для каждого уровня формировать свой контент в main
      {
        name: 'Level 2',
        callback: (): void => mainComponent.setContent(shelterView),
      },
      {
        name: 'Level 3',
        callback: (): void => {},
      },
      {
        name: 'Level 4',
        callback: (): void => {},
      },
      {
        name: 'Level 5',
        callback: (): void => {},
      },
      {
        name: 'Level 6',
        callback: (): void => {},
      },
      {
        name: 'Level 7',
        callback: (): void => {},
      },
      {
        name: 'Level 8',
        callback: (): void => {},
      },
      {
        name: 'Level 9',
        callback: (): void => {},
      },
      {
        name: 'Level 10',
        callback: (): void => {},
      },
    ];

    return levels;
  }
}
