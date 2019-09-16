import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const getPaginationItems = (length, totalItems, activePage, onClickItem) => {
  const items = [];
  const totalPages = Math.round(totalItems / length);
  for (let pageCount = 1; pageCount <= totalPages; pageCount += 1) {
    items.push(
      <Pagination.Item
        key={pageCount}
        active={pageCount === activePage}
        onClick={() => onClickItem(pageCount) }>
          {pageCount}
      </Pagination.Item>,
    );
  }
  return items;
};

const PaginationComponent = (props) => {
  const {
    length,
    activePage = 1,
    totalItems,
    onClickItem,
    size = 'sm',
  } = props;
  const items = getPaginationItems(length, totalItems, activePage, onClickItem);
  const showPages = React.Children.count(items) > 1;
  return (
    showPages && <div className="pull-rigth"><Pagination className="mb-0" size={size}>{items}</Pagination></div>
  );
};

export default PaginationComponent;
