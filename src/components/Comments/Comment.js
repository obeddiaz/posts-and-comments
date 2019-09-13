import React from 'react';

const Comment = (props) => {
  const { email, body } = props;
  return (
    <React.Fragment>
      <div className="col-2">
        <img className="comment-user-image img-fluid" src="/images/user-dummy.png" alt="user" />
      </div>
      <div className="col-10">
        <div className="text-left comment-email"><i className="fa fa-envelope" /> {email}</div>
        <div className="text-left" >{body}</div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
