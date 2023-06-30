import './normalize.css';
import './common.css';
import App from './app/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const currentLevel: number = localStorage.getItem('currentLevel') ? +localStorage.getItem('currentLevel')! : 0;
console.log(currentLevel);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new App(currentLevel);

window.addEventListener('unload', () => {
  let unloadLevel;
  const levels = document.querySelectorAll('.level-item');
  levels.forEach((level, idx) => {
    if (level.classList.contains('level-item__selected')) {
      unloadLevel = idx.toString();
    }
  });
  if (unloadLevel) {
    localStorage.setItem('currentLevel', unloadLevel);
  }
});

export default currentLevel;
