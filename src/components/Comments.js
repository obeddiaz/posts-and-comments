import React from 'react';
import PropTypes from 'prop-types';
import CommentsForm from './forms/CommentForm';


export default class Comments extends React.Component {
  static propTypes = {
    getPostComments: PropTypes.func.isRequired,
  }

  state = {
    totalItems: 0,
    postsPerPage: 10,
    activePage: 1,
    textFilter: '',
    expandedPosts: {},
  }

  componentWillReceiveProps(nextProps) {
    const { id: prevId } = this.props.match.params;
    const { id: nextId } = nextProps.match.params;
    if (prevId !== nextId) {
      this.getPostComments(nextId);
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getPostComments(id);
  }

  getPostComments = (id) => {
    this.props.getPostComments(id);
  }

  onCommentSubmit = (...args) => {
    console.log(args);
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="container">
        <div className="row">
            {
            comments
            && comments.map((comment) => (
                <React.Fragment key={comment.id}>
                  <div className="col-2">
                    <img className="comment-user-image img-fluid" src="/images/user-dummy.png" alt="user" />
                  </div>
                  <div className="col-10">
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                  </div>
                </React.Fragment>
            ))
            }
        </div>
        <CommentsForm onSubmit={this.onCommentSubmit} />
      </div>
    );
  }
}
