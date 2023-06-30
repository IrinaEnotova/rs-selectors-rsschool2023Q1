import ElementCreator from '../src/app/util/element-creator';

describe('getSum', () => {
  it('should return HTMLElement', () => {
    expect(
      new ElementCreator({
        tag: 'div',
        classNames: ['test'],
        textContent: '',
        callback: null,
      }).getElement(),
    ).toBeDefined();
  });
});
