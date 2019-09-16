import * as types from '../../constants/posts';

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
    case types.GET_POSTS:
      return INITIAL_STATE;
    case types.GET_POSTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        posts: action.data,
        totalPosts: action.data.length,
      };
    case types.SEARCH_POST_TEXT:
      return {
        ...state,
        page: 1,
        searchText: action.searchText,
      };
    case types.CHANGE_POSTS_SEARCH_TYPE:
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case types.CHANGE_POSTS_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case types.GET_POSTS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
