import {isEmptyObj} from '../isEmptyObj';

describe('Если передается пустой объект', () => {
  it('функция возвращает true', () => {
    const object = {};
    const result = isEmptyObj(object);
    expect(result).toBeTruthy();
  });
});

describe('Если передается заполненный объект', () => {
  it('функция возвращает false', () => {
    const object = {name: 'Ivan'};
    const result = isEmptyObj(object);
    expect(result).toBeFalsy();
  });
});
