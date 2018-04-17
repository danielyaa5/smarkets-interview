import React from 'react';
import ReactDOM from 'react-dom';
import Event from './Event.component';
import {wrap} from '../../../lib/utils';

describe('Event Page', () => {
  it('renders without crashing', () => {
    const props = {
      event: null,
      match: {
        params: '123'
      }
    };
    const div = document.createElement('div');
    ReactDOM.render(
      wrap(Event, props, ['/event/123'])
      , div);
  });
});
