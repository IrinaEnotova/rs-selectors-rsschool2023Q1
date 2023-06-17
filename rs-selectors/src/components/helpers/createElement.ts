import './gameWindow.css';
import './levels.css';
import './table.css';

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
  // create main
  createCustomElement('div', 'wrapper', 'body');
  createCustomElement('header', 'header', '.wrapper');
  createCustomElement('main', 'main', '.wrapper');
  // header
  createCustomElement('div', 'header_logo', '.header', 'RS CSS Selectors');
  createLinkElement('header_socials', '.header', 'https://github.com/IrinaEnotova', 'Contact me');
  // main
  createCustomElement('h1', 'main_heading', '.main', 'Select bla-bla-bla');
  createCustomElement('div', 'main_help', '.main', "Help, I'm stuck!");
  // game
  createCustomElement('div', 'game-wrapper', '.main', 'here is your table!');
  // editor
  createCustomElement('div', 'editor-wrapper', '.main', 'here is your editor!');
  // create sidebar
  createCustomElement('aside', 'levels-sidebar', 'body');
  createCustomElement('header', 'sidebar-header', '.levels-sidebar');
  createCustomElement('div', 'levels-container', '.levels-sidebar');
  createCustomElement('h2', 'sidebar-heading', '.sidebar-header', 'Choose a level');
};

export const createSidebar = (): void => {};
