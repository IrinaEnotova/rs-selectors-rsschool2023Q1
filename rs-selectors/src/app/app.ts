import '../common.css';
import MainView from './view/main/main-view';
import SidebarView from './view/sidebar/sidebar-view';

// eslint-disable-next-line import/no-mutable-exports
export let importMain: MainView;

export default class App {
  constructor() {
    this.createView();
  }

  createView(): void {
    const mainView = new MainView();
    importMain = mainView;
    const sidebarView = new SidebarView(mainView);

    document.body.append(mainView.getHtmlElement(), sidebarView.getHtmlElement());
  }
}
