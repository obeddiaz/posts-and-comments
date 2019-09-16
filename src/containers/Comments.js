import { connect } from 'react-redux';

import Comments from '../components/Comments/index';
import { postActions, commentActions } from '../actions';

function mapStateToProps(state) {
  const {
    commentReducer: {
      comments,
      error,
      message,
      messageType,
      isLoading: isCommentsLoading,
    },
    postReducer: {
      isLoading: isPostLoading,
      selectedPost,
    },
  } = state;
  return {
    selectedPost,
    comments,
    error,
    message,
    messageType,
    isCommentsLoading,
    isPostLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostById: (id) => dispatch(postActions.getPostById(id)),
    getPostComments: (id) => dispatch(commentActions.getPostComments(id)),
    savePostComment: (postId, commentInfo) => (
      dispatch(commentActions.savePostComment(postId, commentInfo))
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
