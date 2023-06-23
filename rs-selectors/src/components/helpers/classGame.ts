import { createStaticLayout, createEditor, createLevels, createHelpModal } from './createElement';
import dataLevels from '../../app/util/dataLevels';

export default class Game {
  isCompleted: boolean;

  currentLevel: number;
  // rightAnswer: string;

  constructor(currentLevel: number) {
    this.isCompleted = false;
    this.currentLevel = currentLevel;
  }

  generateGame(): void {
    createStaticLayout();
    createEditor();
    createLevels(dataLevels);
    createHelpModal();
  }
}
