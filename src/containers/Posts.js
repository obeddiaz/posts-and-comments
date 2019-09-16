import { connect } from 'react-redux';

import Posts from '../components/Posts/index';
import * as postActions from '../actions/posts';
import * as userActions from '../actions/users';
import { getFilteredPosts, getPaginatedPosts } from '../selectors/posts';


function mapStateToProps(state) {
  const {
    postReducer: {
      searchText,
      page,
      postsPerPage,
      searchBy,
      searchTypes,
      isLoading,
    },
    usersReducer: {
      users,
    },
  } = state;
  const totalPosts = getFilteredPosts(state);
  return {
    searchText,
    searchBy,
    searchTypes,
    page,
    postsPerPage,
    totalPosts: totalPosts.length,
    paginatedPosts: getPaginatedPosts(state),
    isLoading,
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(postActions.getPosts()),
    searchPostText: (searchText) => dispatch(postActions.searchPostText(searchText)),
    changeSearchBy: (searchBy) => dispatch(postActions.changeSearchBy(searchBy)),
    changePostPage: (page) => dispatch(postActions.changePostPage(page)),
    getUsers: () => dispatch(userActions.getUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
