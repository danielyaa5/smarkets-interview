import { getEvent } from '../services/smarkets.service';
import {
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS
} from '../reducers/event.reducer';

export const fetchEvent = id => dispatch => {
  dispatch({ type: FETCH_EVENT_REQUEST });

  getEvent(id).then(
    response =>
      dispatch({
        type: FETCH_EVENT_SUCCESS,
        response
      }),
    error =>
      dispatch({
        type: FETCH_EVENT_FAILURE,
        error
      })
  );
};
