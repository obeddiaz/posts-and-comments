import {
  SEARCH_POST_TEXT,
  GET_POSTS_SUCCESS,
  CHANGE_POSTS_PAGE,
  CHANGE_POSTS_SEARCH_TYPE,
} from '../../constants';

const INITIAL_STATE = {
  searchText: '',
  page: 1,
  postsPerPage: 10,
  posts: [],
  searchBy: 'title',
  searchTypes: ['body', 'title'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        posts: action.data,
        totalPosts: action.data.length,
      };
    case SEARCH_POST_TEXT:
      return {
        ...state,
        page: 1,
        searchText: action.searchText,
      };
    case CHANGE_POSTS_SEARCH_TYPE:
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case CHANGE_POSTS_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
