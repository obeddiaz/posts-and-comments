import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import Pagination from '../pagination';
import '../../styles/Posts.scss';


export default class Posts extends React.Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
  }

  state = {
    expandedPosts: {},
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleChangePage = (activePage) => {
    this.props.changePostPage(activePage);
  }

  handleFilter = (event) => {
    const { value: textFilter } = event.target;
    this.props.searchPostText(textFilter);
  }

  handleSearchBy = (event) => {
    const { value: searchBy } = event.target;
    this.props.changeSearchBy(searchBy);
  }

  postPagination = () => {
    const { page: activePage, postsPerPage, totalPosts } = this.props;
    return (
      <Pagination
        length={postsPerPage}
        activePage={activePage}
        totalItems={totalPosts}
        onClickItem={this.handleChangePage}
      />
    );
  }

  toggleExpandCollapse = (index) => {
    this.setState((prevState) => ({
      expandedPosts: {
        ...prevState.expandedPosts,
        [index]: !prevState.expandedPosts[index],
      },
    }));
  }

  getFilterBar = () => {
    const {
      searchText,
      searchBy,
      searchTypes,
      page: activePage,
      postsPerPage,
      totalPosts,
    } = this.props;
    return (
      <div className="search-bar pb-3 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <input type="text" placeholder="filter" className="form-control" onChange={this.handleFilter} value={searchText} />
            </div>
            <div className="col-md-4 col-xs-12">
              <select className="form-control" value={searchBy} onChange={this.handleSearchBy}>\
                { searchTypes.map((option, index) => (<option key={`option-${index}`} value={option}>{option}</option>)) }
              </select>
            </div>
            <div className="col-md-4 col-xs-12 align-self-center">
              <Pagination
                length={postsPerPage}
                activePage={activePage}
                totalItems={totalPosts}
                onClickItem={this.handleChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { expandedPosts } = this.state;
    const { paginatedPosts } = this.props;
    return (
      <>
        {
          this.getFilterBar()
        }
        <div className="container">
          <div className="row">
            {
              paginatedPosts
              && paginatedPosts.map((post, index) => (
                  <Post
                    key={post.id}
                    onExpandClick={() => this.toggleExpandCollapse(index)}
                    isExpanded={expandedPosts[index]}
                    {...post}
                    />
              ))
            }
          </div>
        </div>
        {
          this.getFilterBar()
        }
      </>
    );
  }
}
