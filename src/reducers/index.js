import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './events.reducer';
import event from './event.reducer';

export default combineReducers({
  router: routerReducer,
  event,
  events
});
