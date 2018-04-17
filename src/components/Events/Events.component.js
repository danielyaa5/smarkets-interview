import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

import Page from '../Page';
import EventsList from '../EventsList';
import FetchError from '../FetchError';

const firstLetterUc = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
const getTitle = params => `${firstLetterUc(params.sortedBy)} Events`;

export default class Events extends React.PureComponent {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { match, isFetching, errorMessage, events, fetchEvents } = this.props;

    if (errorMessage) {
      return (
        <FetchError message={errorMessage} onRetry={() => fetchEvents()} />
      );
    }

    return (
      <Page title={getTitle(match.params)}>
        {isFetching && (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )}
        <EventsList {...{ events }} />
      </Page>
    );
  }
}
