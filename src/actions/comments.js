import * as types from '../constants/comments';

export const getPostComments = (id) => ({ type: types.GET_POST_COMMENTS, id });

export const savePostComment = (postId, commentInfo) => ({
  type: types.SAVE_POST_COMMENT, commentInfo, postId,
});
