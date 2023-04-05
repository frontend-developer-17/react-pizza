import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Paginate.module.scss';
export default function Paginate({ setcurrentPage }) {
  const handlePageClick = (event) => {
    setcurrentPage(event.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
