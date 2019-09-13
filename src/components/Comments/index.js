import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentsForm from '../forms/CommentForm';
import '../../styles/Comments.scss';

export default class Comments extends React.Component {
  static propTypes = {
    getPostComments: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const { id: prevId } = this.props.match.params;
    const { id: nextId } = nextProps.match.params;
    if (prevId !== nextId) {
      this.getPostComments(nextId);
    }
  }

  componentDidMount() {
    const { id: postId } = this.props.match.params;
    this.getPostComments(postId);
  }

  getPostComments = (id) => {
    this.props.getPostComments(id);
  }

  onCommentSubmit = (values) => {
    const { id: postId } = this.props.match.params;
    this.props.savePostComment(postId, values);
  }

  render() {
    const { comments } = this.props;
    return (
      <>
      <div className="container">
        <div className="row comments-container">
            {
            comments
            && comments.map((comment) => (<Comment key={comment.id} { ...comment } />))
            }
        </div>
      </div>
      <div className="comment-form-container pb-5 pt-5">
        <div className="container">
          <CommentsForm onSubmit={this.onCommentSubmit} />
        </div>
      </div>
      </>
    );
  }
}
