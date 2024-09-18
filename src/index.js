import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

const UserProfile = props => {
  return <img src={`http://source.unsplash.com/user/${props.username}`} />;
};

UserProfile.propTypes = {
  pagename: PropTypes.string
};

UserProfile.defaultProps = {
  pagename: "erondu"
};

const UserProfileLink = props => {
  return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>;
};

const UserCard = props => {
  return (
    <div>
      <UserProfileLink username={props.username} />
      <UserProfile username={props.username} />
    </div>
  );
};

ReactDOM.createRoot(node).render(<UserCard username="erondu" />);
