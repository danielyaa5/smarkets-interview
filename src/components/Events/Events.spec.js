import React from 'react';
import ReactDOM from 'react-dom';
import Events from './Events.component';
import {wrap} from '../../../lib/utils';

describe('Events Page', () => {
  it('renders without crashing', () => {
    const props = {
      events: [],
      match: { params: 'Popular' }
    };
    const div = document.createElement('div');
    ReactDOM.render(wrap(Events, props, ['/events/popular']), div);
  });
});
