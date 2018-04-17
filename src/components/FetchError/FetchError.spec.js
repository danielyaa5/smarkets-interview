import React from 'react';
import ReactDOM from 'react-dom';
import FetchError from './index';

describe('FetchError Component', () => {
  it('renders without crashing', () => {
    const props = {
      onRetry: () => null
    };
    const div = document.createElement('div');
    ReactDOM.render(<FetchError {...props}/>, div);
  });
});
