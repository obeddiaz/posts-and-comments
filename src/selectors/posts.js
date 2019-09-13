/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getSearchText = (state) => (state.postReducer.searchText);

const getSearchBy = (state) => (state.postReducer.searchBy);

const getPosts = (state) => (state.postReducer.posts);

const getCurrentPage = (state) => (state.postReducer.page);

const getPostsPerPage = (state) => (state.postReducer.postsPerPage);

export const getFilteredPosts = createSelector(
  [getPosts, getSearchText, getSearchBy],
  (posts, searchText, searchBy) => (searchText ? posts.filter((post) => (post[searchBy].includes(searchText))) : posts),
);

export const getPaginatedPosts = createSelector(
  [getFilteredPosts, getCurrentPage, getPostsPerPage],
  (posts, currentPage, postsPerPage) => {
    const offset = (currentPage - 1) * postsPerPage;
    return posts && posts.slice(offset, offset + postsPerPage);
  },
);
