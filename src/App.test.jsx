import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import {App} from './App';

describe('Если отрендерить компонент App', () => {
  test('приложение не сломается', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
