import { connect } from 'react-redux';

import Comments from '../components/Comments/index';
import * as commentActions from '../actions/comments';

function mapStateToProps(state) {
  const {
    comments,
    error,
    message,
    messageType,
  } = state.commentReducer;
  return {
    comments,
    error,
    message,
    messageType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostComments: (id) => dispatch(commentActions.getPostComments(id)),
    savePostComment: (postId, commentInfo) => (
      dispatch(commentActions.savePostComment(postId, commentInfo))
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
