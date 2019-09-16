import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

import Comment from './Comment';
import CommentsForm from '../forms/CommentForm';
import '../../styles/Comments.scss';

export default class Comments extends React.Component {
  static propTypes = {
    getPostComments: PropTypes.func.isRequired,
    savePostComment: PropTypes.func.isRequired,
    comments: PropTypes.array,
    message: PropTypes.string,
    messageType: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    const { id: prevId } = this.props.match.params;
    const { id: nextId } = nextProps.match.params;
    if (prevId !== nextId) {
      this.getPostAndComments(nextId);
    }
  }

  componentDidMount() {
    const { id: postId } = this.props.match.params;
    this.getPostAndComments(postId);
  }

  getPostAndComments = (id) => {
    this.props.getPostById(id);
    this.props.getPostComments(id);
  }

  onCommentSubmit = (values) => {
    const { id: postId } = this.props.match.params;
    this.props.savePostComment(postId, values);
  }

  render() {
    const {
      comments,
      message,
      messageType,
      selectedPost,
    } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 mb-2 mt-2">
              <img className="post-image" src="/images/dummy-image.jpg" alt="Post" />
            </div>
            <div className="col-md-6 col-xs-12 mb-2 mt-2 text-left">
              <h3>{selectedPost.title}</h3>
              <p>
                {selectedPost.body}
              </p>
            </div>
          </div>
          <div className="row comments-container">
            <div className="col-12">
              <h4>Post Comments: </h4>
            </div>
            {
            comments
            && comments.map((comment) => (<Comment key={comment.id} { ...comment } />))
            }
          </div>
        </div>
        <div className="comment-form-container pb-5 pt-5">
          <div className="container">
            {
              message
              && <Alert variant={messageType}>
                    {message}
                </Alert>
            }
            <CommentsForm onSubmit={this.onCommentSubmit} />
          </div>
        </div>
      </>
    );
  }
}
