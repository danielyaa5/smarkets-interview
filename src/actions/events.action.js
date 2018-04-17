import { getPopularEvents } from '../services/smarkets.service';
import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS
} from '../reducers/events.reducer';

export const fetchEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_REQUEST });

  getPopularEvents().then(
    response =>
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        response
      }),
    error =>
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        error
      })
  );
};
