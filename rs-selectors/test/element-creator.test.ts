import ElementCreator from '../src/app/util/element-creator';

describe('Check methods of ElementCreator', () => {
  const elementParams = {
    tag: 'div',
    classNames: ['test'],
    textContent: '',
    callback: null,
  };
  let testElement: ElementCreator;
  const innerElement = document.createElement('span');
  beforeAll(() => {
    testElement = new ElementCreator(elementParams);
    testElement.setCssClasses(['testing-element', 'css-class']);
    testElement.setTextContent('test string');
    testElement.addInnerElement(innerElement);
  });

  it('should return HTMLElement', () => {
    expect(testElement.getElement()).toBeDefined();
  });

  it('should set CSS', () => {
    expect(testElement.getElement().className).toEqual('test testing-element css-class');
  });

  it('should set textContent', () => {
    expect(testElement.getElement().textContent).toEqual('test string');
  });

  it('should add inner element', () => {
    expect(testElement.getElement().contains(innerElement)).toBeTruthy();
  });
});
