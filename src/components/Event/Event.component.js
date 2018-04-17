import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

import Page from '../Page';
import FetchError from '../FetchError';

const parseDate = date => new Date(Date.parse(date)).toLocaleDateString();
const getTitle = event => (event ? event.name : 'Event Page');
const firstLetterUc = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default class Event extends React.PureComponent {
  static propTypes = {
    fetchEvent: PropTypes.func.isRequired,
    event: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  render() {
    const { isFetching, errorMessage, event, fetchEvent } = this.props;

    if (errorMessage) {
      return <FetchError message={errorMessage} onRetry={() => fetchEvent()} />;
    }

    return (
      <Page title={getTitle(event)}>
        {isFetching && (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )}
        {event && (
          <center>
            <div style={{ margin: '0 auto', color: 'rgba(255,255,255,0.5)' }}>
              <h3 style={{ color: 'rgba(37, 204, 147, 0.7)' }}>
                {event.parent_name}
              </h3>
              <h4>Description: {event.description || 'None'}</h4>
              <h4>Type: {firstLetterUc(event.event_type)}</h4>
              <h4>Starts: {parseDate(event.start_datetime)}</h4>
            </div>
          </center>
        )}
      </Page>
    );
  }
}
