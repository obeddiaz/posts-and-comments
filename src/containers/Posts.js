import { connect } from 'react-redux';

import Posts from '../components/Posts/index';
import * as postActions from '../actions/posts';
import { getFilteredPosts, getPaginatedPosts } from '../selectors/posts';


function mapStateToProps(state) {
  const {
    searchText,
    page,
    postsPerPage,
    searchBy,
    searchTypes,
  } = state.postReducer;
  const totalPosts = getFilteredPosts(state);
  return {
    searchText,
    searchBy,
    searchTypes,
    page,
    postsPerPage,
    totalPosts: totalPosts.length,
    paginatedPosts: getPaginatedPosts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(postActions.getPosts()),
    searchPostText: (searchText) => dispatch(postActions.searchPostText(searchText)),
    changeSearchBy: (searchBy) => dispatch(postActions.changeSearchBy(searchBy)),
    changePostPage: (page) => dispatch(postActions.changePostPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
