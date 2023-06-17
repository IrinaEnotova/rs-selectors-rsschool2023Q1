import { createStaticLayout } from './createElement';

export default class Game {
  isCompleted: boolean;

  constructor() {
    this.isCompleted = true;
  }

  generateGame(): void {
    createStaticLayout();
  }
}
