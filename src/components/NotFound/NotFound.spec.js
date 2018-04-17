import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './index';
import {wrap} from '../../../lib/utils';

describe('NotFound Page', () => {
  it('renders without crashing', () => {
    const props = {};
    const div = document.createElement('div');
    ReactDOM.render(wrap(NotFound, props, ['/doesnt-exist']), div);
  });
});
