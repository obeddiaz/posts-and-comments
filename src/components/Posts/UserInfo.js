import React, { useState, useRef } from 'react';

import { Overlay, Tooltip } from 'react-bootstrap';

const UserInfo = (props) => {
  const { data } = props;
  const target = useRef(null);
  const [showUserTooltip, toggleUserTooltip] = useState(false);
  return (
    <>
        <button className="btn btn-link" onClick={() => toggleUserTooltip(!showUserTooltip)}>
            <span ref={target} >
            <i className="fa fa-user" /> { data.username }
            </span>
        </button>
        <Overlay target={target.current} show={showUserTooltip} placement="right">
            <Tooltip className="user-info-tooltip">
            <div><i className="fa fa-user" /> { data.username }</div>
            <div><i className="fa fa-user" /> { data.name }</div>
            <div> <i className="fa fa-globe" /> { data.website }</div>
            </Tooltip>
        </Overlay>
    </>
  );
};

export default UserInfo;
