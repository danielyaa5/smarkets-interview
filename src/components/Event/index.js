import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Event from './Event.component';
import { fetchEvent } from '../../actions/event.action';
import {
  getEvent,
  getIsFetching,
  getErrorMessage
} from '../../reducers/event.reducer';

const mapStateToProps = state => ({
  event: getEvent(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEvent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Event);
