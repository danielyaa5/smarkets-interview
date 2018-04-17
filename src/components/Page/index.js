import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Header } from 'semantic-ui-react';

const Page = ({ title, children }) => (
  <div>
    <br />
    <Link to="/">
      <Image
        src="https://pbs.twimg.com/profile_images/948566636046495745/enDchM8s_400x400.jpg"
        centered={true}
        size="small"
      />
    </Link>
    <Header as="h2" textAlign="center" style={{ color: '#fefefe' }}>
      {title}
    </Header>
    <br />
    {children}
    <br />
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Page;
