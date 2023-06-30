/* eslint-disable max-lines-per-function */
import { IElCreationParams, ISidebarLevel } from '../../../types/types';
import ElementCreator from '../../util/element-creator';
import MainView from '../main/main-view';
// eslint-disable-next-line import/no-cycle
import ShelterView from '../main/shelter/shelter-view';
import View from '../view';
import LevelView from './level/level-view';
import './sidebar.css';

const CssClasses = {
  SIDEBAR: 'levels-sidebar',
  LEVELS: 'levels-container',
};

// const START_LEVEL_INDEX = 0;

export default class SidebarView extends View {
  levelElements: LevelView[];

  constructor(mainComponent: MainView, levelId: number) {
    const params: IElCreationParams = {
      tag: 'aside',
      classNames: [CssClasses.SIDEBAR],
    };
    super(params);

    this.levelElements = [];
    this.configureView(mainComponent, levelId);
  }

  configureView(mainComponent: MainView, levelId: number): void {
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

      if (index === levelId) {
        level.callback();
        levelElement.setSelectedStatus();
      }

      this.levelElements.push(levelElement);
    });

    this.elementCreator.addInnerElement(
      new ElementCreator({
        tag: 'button',
        classNames: ['reset-btn'],
        textContent: 'Reset progress',
        callback: (): void => {
          console.log('Reset levels');
          this.levelElements.forEach((level) => {
            level.getHtmlElement().classList.remove('level-item__completed');
            level.getHtmlElement().classList.remove('help-used');
          });
        },
      }),
    );
  }

  getLevels(mainComponent: MainView): ISidebarLevel[] {
    const levels = [
      {
        name: 'Level 1',
        callback: (): void => mainComponent.setContent(new ShelterView(1)),
      },
      {
        name: 'Level 2',
        callback: (): void => mainComponent.setContent(new ShelterView(2)),
      },
      {
        name: 'Level 3',
        callback: (): void => mainComponent.setContent(new ShelterView(3)),
      },
      {
        name: 'Level 4',
        callback: (): void => mainComponent.setContent(new ShelterView(4)),
      },
      {
        name: 'Level 5',
        callback: (): void => mainComponent.setContent(new ShelterView(5)),
      },
      {
        name: 'Level 6',
        callback: (): void => mainComponent.setContent(new ShelterView(6)),
      },
      {
        name: 'Level 7',
        callback: (): void => mainComponent.setContent(new ShelterView(7)),
      },
      {
        name: 'Level 8',
        callback: (): void => mainComponent.setContent(new ShelterView(8)),
      },
      {
        name: 'Level 9',
        callback: (): void => mainComponent.setContent(new ShelterView(9)),
      },
      {
        name: 'Level 10',
        callback: (): void => mainComponent.setContent(new ShelterView(10)),
      },
    ];

    return levels;
  }
}
