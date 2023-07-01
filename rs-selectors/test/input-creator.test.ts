import InputCreator from '../src/app/util/input-creator';

describe('Check methods for input', () => {
  const inputParams = {
    tag: 'input',
    classNames: ['input'],
    textContent: '',
    callback: null,
  };
  const testInput = new InputCreator(inputParams);
  testInput.setValue(1, false);
  const firstInput = testInput.getElement() as HTMLInputElement;

  it('should be empty input', () => {
    expect(firstInput.value).toEqual('');
  });

  const testInput2 = new InputCreator(inputParams);
  testInput2.setPlaceholder();
  testInput2.setValue(2, true);
  const secondInput = testInput2.getElement() as HTMLInputElement;
  const rightAnswer = 'dog';

  it('should be right answer in input', () => {
    expect(secondInput.value).toEqual(rightAnswer);
  });

  it('should set placeholder in input', () => {
    expect(secondInput.placeholder).toEqual('Type here!');
  });
});
