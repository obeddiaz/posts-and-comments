/* eslint-disable import/prefer-default-export */
import * as commentsActions from '../constants/comments';

export const getPostComments = (id) => ({ type: commentsActions.GET_POST_COMMENTS, id });

export const savePostComment = (postId, commentInfo) => ({
  type: commentsActions.SAVE_POST_COMMENT, commentInfo, postId,
});
