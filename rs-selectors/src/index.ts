import './normalize.css';
import './common.css';
import App from './app/app';
import saveCurrentLevel from './app/util/saveCurrentLevel';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const currentLevel: number = localStorage.getItem('currentLevel') ? +localStorage.getItem('currentLevel')! : 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new App(currentLevel);

window.addEventListener('unload', saveCurrentLevel);

export default currentLevel;
