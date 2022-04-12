import React from 'react';
import cn from 'classnames';

import {DataQa} from '../../../../../data/constants';

import s from './Search.scss';

export const Search = ({inputValue, onInputChange, onSearchButtonClick, className}) => (
  <section className={cn(s.search, className)}>
    <input
      data-testid={DataQa.thunkSearchInput}
      type="text"
      name="todoInput"
      placeholder="Имя репозитория"
      value={inputValue}
      onChange={onInputChange}
      className={s.input}
    />
    <button data-testid={DataQa.thunkSearchButton} onClick={onSearchButtonClick} className={s.seachButton}>
      Найти
    </button>
  </section>
);
