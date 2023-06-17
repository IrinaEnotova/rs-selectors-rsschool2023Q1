import './normalize.css';
import './common.css';
import Game from './components/helpers/classGame';
// import dataLevels from './components/helpers/dataLevels';
// import { ILevel } from './types/types';

const currentGame = new Game();
currentGame.generateGame();

// document.addEventListener('DOMContentLoaded', () => {
//   localStorage.getItem('levelFulfilment');
// });

// dataLevels[3].isCompleted = 1;
// const storageArr: number[] = [];
// dataLevels.forEach((level: ILevel): void => {
//   storageArr.push(level.isCompleted);
// });
// console.log(storageArr);

// window.addEventListener('unload', () => {
//   localStorage.setItem('levelFulfilment', storageArr.join(','));
// });
