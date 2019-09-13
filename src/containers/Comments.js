import { connect } from 'react-redux';

import Comments from '../components/Comments';
import * as postActions from '../actions/comments';

function mapStateToProps(state) {
  const { comments } = state.commentReducer;
  return {
    comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostComments: (id) => dispatch(postActions.getPostComments(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
