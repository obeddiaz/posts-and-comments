/* eslint-disable import/prefer-default-export */
import * as types from '../constants/posts';

export const getPosts = () => ({ type: types.GET_POSTS });

export const searchPostText = (searchText) => ({ type: types.SEARCH_POST_TEXT, searchText });

export const changeSearchBy = (searchBy) => (
  { type: types.CHANGE_POSTS_SEARCH_TYPE, searchBy }
);

export const changePostPage = (page) => ({ type: types.CHANGE_POSTS_PAGE, page });
