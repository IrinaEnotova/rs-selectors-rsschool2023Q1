import '../common.css';
import MainView from './view/main/main-view';
// eslint-disable-next-line import/no-cycle
import SidebarView from './view/sidebar/sidebar-view';

// eslint-disable-next-line import/no-mutable-exports
export let importMain: MainView;

export default class App {
  constructor(levelId: number) {
    this.createView(levelId);
  }

  createView(levelId: number): void {
    const mainView = new MainView();
    importMain = mainView;
    const sidebarView = new SidebarView(mainView, levelId);

    document.body.append(mainView.getHtmlElement(), sidebarView.getHtmlElement());
  }
}
