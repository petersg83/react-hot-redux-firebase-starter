import React from 'react';

const DumbActiveUserList = (props) => {
  const users = Object.keys(props.activeUsers).map((key, index) => props.activeUsers[key] + ' ');

  return (<p className="activeUsers">
    <b>connected users:</b> {users}
  </p>);
};

DumbActiveUserList.propTypes = {
  activeUsers: React.PropTypes.object
};

export default DumbActiveUserList;
