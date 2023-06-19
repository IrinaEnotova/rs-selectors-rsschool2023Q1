import { createStaticLayout, createEditor } from './createElement';

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
  }
}
