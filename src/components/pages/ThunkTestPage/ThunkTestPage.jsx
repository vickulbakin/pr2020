import React from 'react';
import {Container} from '../../common/Container/Container';
import {useRepoSearch} from '../../../hooks/useRepoSearch/useRepoSearch';
import {isEmptyObj} from '../../../utils/isEmptyObj';
import {Search} from './components/Search/Search';
import {Result} from './components/Result/Result';

import s from './ThunkTestPage.scss';

export const ThunkTestPage = () => {
  const {inputValue, onInputChange, onSearchButtonClick, searchState} = useRepoSearch();

  return (
    <main className={s.root}>
      <Container>
        <Search
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSearchButtonClick={onSearchButtonClick}
          className={s.search}
        />
        <Result searchState={searchState} />
      </Container>
    </main>
  );
};
