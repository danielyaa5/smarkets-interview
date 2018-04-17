import React from 'react';
import ReactDOM from 'react-dom';
import Page from './index';
import {wrap} from '../../../lib/utils';

describe('Page Component', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'Test Title'
    };
    const div = document.createElement('div');
    ReactDOM.render(wrap(Page, props, ['/events/popular']), div);
  });
});
