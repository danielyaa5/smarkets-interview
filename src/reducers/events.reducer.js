import { combineReducers } from 'redux';

export const FETCH_EVENTS_REQUEST = 'events/FETCH_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'events/FETCH_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'events/FETCH_FAILURE';

const all = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return action.response.data.results;
    case FETCH_EVENTS_REQUEST:
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return true;
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_EVENTS_FAILURE:
      return action.error.message || 'Whoops. Something went wrong.';
    case FETCH_EVENTS_REQUEST:
    case FETCH_EVENTS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  all,
  isFetching,
  errorMessage
});

export const getAllEvents = state => state.events.all;
export const getIsFetching = state => state.events.isFetching;
export const getErrorMessage = state => state.events.errorMessage;
