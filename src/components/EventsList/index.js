import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EventsList = ({ events }) => (
  <List relaxed="very" style={{ paddingLeft: '30px' }}>
    {events.map(({ name, id, parent_name }) => (
      <List.Item key={id}>
        <List.Content>
          <List.Header as="h3">
            <Link
              to={`/event/${id}`}
              style={{ color: 'rgba(37, 204, 147, 0.7)' }}>
              {name}
            </Link>
          </List.Header>
          <List.Description style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {parent_name}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EventsList;
