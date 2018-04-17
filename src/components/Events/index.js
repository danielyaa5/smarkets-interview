import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Events from './Events.component';
import { fetchEvents } from '../../actions/events.action';
import {
  getAllEvents,
  getIsFetching,
  getErrorMessage
} from '../../reducers/events.reducer';

const mapStateToProps = state => ({
  events: getAllEvents(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEvents
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Events);
