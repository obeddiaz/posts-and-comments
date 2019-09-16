import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import UserInfo from './UserInfo';


const Post = (props) => {
  const {
    isExpanded,
    id,
    title,
    body,
    onExpandClick,
    userInfo,
  } = props;
  return (
    <>
      <div className="col-md-4 col-xs-12 mb-2 mt-2">
        <img className="post-image" src="images/dummy-image.jpg" alt="Post" />
      </div>
      <div className="col-md-6 col-xs-12 mb-2 mt-2 text-left">
        <Link className="h6" to={`posts/${id}`}>{title}</Link>
        <p className={classNames('post-text', { expanded: isExpanded })}>
          {body}
        </p>
        <div className="text-right">
          <button className="btn btn-link" onClick={onExpandClick}>
            Show { isExpanded ? 'Less' : 'More' }
          </button>
        </div>
        {
          userInfo && <UserInfo data={userInfo} />
        }
      </div>
    </>
  );
};

export default Post;
