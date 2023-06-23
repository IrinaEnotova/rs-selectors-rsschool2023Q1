import '../common.css';
import MainView from './view/main/main-view';
import SidebarView from './view/sidebar/sidebar-view';
// import EditorView from './view/main/editor/editor-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView(): void {
    const mainView = new MainView();
    const sidebarView = new SidebarView(mainView);

    document.body.append(mainView.getHtmlElement(), sidebarView.getHtmlElement());
  }
}
