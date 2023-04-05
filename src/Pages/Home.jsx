import React, { useEffect } from 'react';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlok from '../Components/PizzaBlok/PizzaBlok';
import Skeleton from '../Components/PizzaBlok/Skeleton';
import Paginate from '../Components/Paginate/Paginate';
import { SearchContext } from './../App';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { urlCategori } from '../Redux/CategoriSlise';
import { urlSort } from '../Redux/SortSlise';
import { useRef } from 'react';
//import { urlSort } from '../Redux/SortSlise';

export default function Home() {
  const { search } = React.useContext(SearchContext);
  const navigate = useNavigate();
  const [pizza, setPizaa] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setcurrentPage] = React.useState(1);
  const isSearch = useRef(false);
  const isMoundet = useRef(false);
  const sceleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  const activeCategor = useSelector((state) => state.categoriSlice.categori);
  const activeSort = useSelector((state) => state.sortSlice.activeSort);
  const sort = useSelector((state) => state.sortSlice.sort);

  const dispatch = useDispatch();
  const fetchPizzaz = () => {
    setIsLoading(true);
    const order = activeSort.sort.includes('-') ? 'asc' : 'desc';
    const sort = activeSort.sort.replace('-', '');
    const categori = activeCategor > 0 ? activeCategor : '';
    axios
      .get(
        `https://641dca320596099ce154a309.mockapi.io/react-pizza?category=${categori}&order=${order}&sortBy=${sort}&page=${currentPage}&limit=4`,
      )
      .then((response) => {
        setPizaa(response.data);
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      const sorting = sort.find((obj) => obj.sort === params.activeSort);
      dispatch(urlCategori({ ...params }));
      dispatch(urlSort({ sorting }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    fetchPizzaz();
  }, [activeCategor, activeSort.sort, currentPage]);

  React.useEffect(() => {
    if (isMoundet.current) {
      const urlData = qs.stringify({
        activeCategor,
        activeSort: activeSort.sort,
      });
      navigate(`?${urlData}`);
    }
    isMoundet.current = true;
  }, [activeCategor, activeSort.sort]);

  const pizzaz = pizza
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <div key={obj.id}>
        <PizzaBlok
          id={obj.id}
          prise={obj.price}
          imageUrl={obj.imageUrl}
          title={obj.title}
          sizes={obj.sizes}
          types={obj.types}
        />
      </div>
    ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories setcurrentPage={setcurrentPage} activeCategor={activeCategor} />
        <Sort activeSort={activeSort} dispatch={dispatch} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceleton : <>{pizzaz}</>}</div>
      <Paginate setcurrentPage={setcurrentPage} />
    </div>
  );
}
