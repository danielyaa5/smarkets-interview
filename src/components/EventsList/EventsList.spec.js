import React from 'react';
import ReactDOM from 'react-dom';
import EventsList from './index';

describe('EventList Component', () => {
  it('renders without crashing', () => {
    const props = {
      events: []
    };
    const div = document.createElement('div');
    ReactDOM.render(<EventsList {...props}/>, div);
  });
});
