import { combineReducers } from 'redux';

export const FETCH_EVENT_REQUEST = 'event/FETCH_REQUEST';
export const FETCH_EVENT_SUCCESS = 'event/FETCH_SUCCESS';
export const FETCH_EVENT_FAILURE = 'event/FETCH_FAILURE';

const data = (state = null, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return action.response.data.event;
    case FETCH_EVENT_REQUEST:
      return null;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return true;
    case FETCH_EVENT_SUCCESS:
    case FETCH_EVENT_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_EVENT_FAILURE:
      return action.error.message || 'Whoops. Something went wrong.';
    case FETCH_EVENT_REQUEST:
    case FETCH_EVENT_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  isFetching,
  errorMessage
});

export const getEvent = state => state.event.data;
export const getIsFetching = state => state.event.isFetching;
export const getErrorMessage = state => state.event.errorMessage;
