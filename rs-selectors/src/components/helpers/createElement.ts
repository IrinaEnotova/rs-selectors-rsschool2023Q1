import './gameWindow.css';
import './levels.css';
import './shelter.css';
import './editor.css';
import './modal.css';
import { ILevel } from '../../types/types';

const createCustomElement = (tagName: string, className: string, parent: string, content = ''): void => {
  const childElement = document.createElement(tagName);
  const parentElement = document.querySelector(parent);
  childElement.className = className;
  childElement.innerHTML = content;
  parentElement?.append(childElement);
};

const createLinkElement = (className: string, parent: string, src: string, content = ''): void => {
  const childElement = document.createElement('a');
  const parentElement = document.querySelector(parent);
  childElement.className = className;
  childElement.href = src;
  if (content) {
    childElement.textContent = content;
  }
  parentElement?.append(childElement);
};

export const createStaticLayout = (): void => {
  createCustomElement('div', 'wrapper', 'body');
  createCustomElement('header', 'header', '.wrapper');
  createCustomElement('main', 'main', '.wrapper');
  createCustomElement('div', 'header_logo', '.header', 'RS CSS Paws');
  createLinkElement('header_socials', '.header', 'https://github.com/IrinaEnotova', 'Contact me');
  // main
  createCustomElement('h1', 'main_heading', '.main', 'Select an animal');
  createCustomElement('div', 'main_help', '.main', "Help, I'm stuck!");
  // game
  createCustomElement('div', 'game-wrapper', '.main', 'here is your table!');
  // editor
  createCustomElement('div', 'editor-wrapper', '.main');
  createCustomElement('div', 'editor-pane css-editor', '.editor-wrapper');
  createCustomElement('div', 'editor-pane html-viewer', '.editor-wrapper');
  // css-editor
  createCustomElement('div', 'css-editor_title', '.css-editor', 'style.css');
  createCustomElement('div', 'css-editor_name', '.css-editor', 'Editor CSS');
  createCustomElement('div', 'css-editor_help-box', '.css-editor');
  createCustomElement('div', 'css-editor_help-markup editor_markup', '.css-editor_help-box');
  createCustomElement('div', 'css-editor_content', '.css-editor_help-box');
  createCustomElement('div', 'css-editor_input-box', '.css-editor_content');
  createCustomElement('input', 'css-editor_input', '.css-editor_input-box');
  createCustomElement('button', 'css-editor_btn', '.css-editor_input-box', 'Enter');
  createCustomElement('div', 'css-editor_help-text', '.css-editor_content');
  // html-viewer
  createCustomElement('div', 'html-viewer_title', '.html-viewer', 'index.html');
  createCustomElement('div', 'html-viewer_name', '.html-viewer', 'HTML Viewer');
  createCustomElement('div', 'html-viewer_help-box', '.html-viewer');
  createCustomElement('div', 'html-viewer_help-markup editor_markup', '.html-viewer_help-box');
  createCustomElement('div', 'html-viewer_help-text', '.html-viewer_help-box');
  // sidebar
  createCustomElement('aside', 'levels-sidebar', 'body');
  createCustomElement('header', 'sidebar-header', '.levels-sidebar');
  createCustomElement('div', 'levels-container', '.levels-sidebar');
  createCustomElement('button', 'reset-btn', '.levels-sidebar', 'Reset progress');
  createCustomElement('h2', 'sidebar-heading', '.sidebar-header', 'Choose a level');
};

export const createEditor = (): void => {
  const editorMarkups = document.querySelectorAll('.editor_markup');
  const cssEditorContent = document.querySelector('.css-editor_help-text') as Element;
  const htmlViewerContent = document.querySelector('.html-viewer_help-text') as Element;
  let content = '';
  for (let i = 1; i <= 20; i += 1) {
    content += `${i}\n`;
  }
  editorMarkups[0].textContent = content;
  cssEditorContent.innerHTML = `
  {
  <br>
  /* Styles would go here. */
  <br>
  }
  <br>
  <br>
  /*
  <br>
  Type a number to skip to a level.
  <br>
  Example → "5" for level 5
  <br>
  */
  `;
  editorMarkups[1].textContent = content;
  htmlViewerContent.innerHTML = 'Here should be html code from level';
};

export const createLevels = (data: ILevel[]): void => {
  const levelContainer = document.querySelector('.levels-container');
  for (let i = 1; i <= data.length; i += 1) {
    const element = document.createElement('div');
    element.className = `level-item level-${i}`;
    element.textContent = `Level ${i}`;
    levelContainer?.append(element);
  }
};

export const createHelpModal = (): void => {
  // createCustomElement('div', 'modal-container', 'body');
  createCustomElement('cat', 'cat', '.game-wrapper');
};
