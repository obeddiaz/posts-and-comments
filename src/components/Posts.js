import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Pagination from './pagination';


export default class Posts extends React.Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
  }

  state = {
    totalItems: 0,
    postsPerPage: 10,
    activePage: 1,
    textFilter: '',
    expandedPosts: {},
  }

  filteredPosts = [];

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
                { searchTypes.map((option) => (<option value={option}>{option}</option>)) }
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
                <React.Fragment key={post.id}>
                  <div className="col-md-4 col-xs-12 mb-2 mt-2">
                    <img className="post-image" src="images/dummy-image.jpg" alt="Post" />
                  </div>
                  <div className="col-md-6 col-xs-12 mb-2 mt-2 text-left">
                    <Link className="h6" to={`posts/${post.id}`}>{post.title}</Link>
                    <p className={classNames('post-text', { expanded: expandedPosts[index] })}>
                      {post.body}
                    </p>
                    <div className="text-right">
                      <button className="btn btn-link" onClick={() => this.toggleExpandCollapse(index)}>
                        Show { expandedPosts[index] ? 'Less' : 'More' }
                      </button>
                    </div>
                  </div>
                </React.Fragment>
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
