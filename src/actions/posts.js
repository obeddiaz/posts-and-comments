/* eslint-disable import/prefer-default-export */
import * as postActions from '../constants/posts';

export const getPosts = () => ({ type: postActions.GET_POSTS });

export const searchPostText = (searchText) => ({ type: postActions.SEARCH_POST_TEXT, searchText });

export const changeSearchBy = (searchBy) => ({ type: postActions.CHANGE_POSTS_SEARCH_TYPE, searchBy });

export const changePostPage = (page) => ({ type: postActions.CHANGE_POSTS_PAGE, page });
