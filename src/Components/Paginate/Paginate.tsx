import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Paginate.module.scss';
type PaginateProps={
  setcurrentPage:(page:number)=>void
}

const Paginate:React.FC<PaginateProps> = ({ setcurrentPage }) => 
 <ReactPaginate
className={style.root}
breakLabel="..."
nextLabel=" >"
onPageChange={event=>setcurrentPage(event.selected + 1)}
pageRangeDisplayed={5}
pageCount={3}
previousLabel="< "

/>
export default Paginate