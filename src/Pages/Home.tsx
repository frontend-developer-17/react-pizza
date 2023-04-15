import React from 'react';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlok from '../Components/PizzaBlok/PizzaBlok';
import Skeleton from '../Components/PizzaBlok/Skeleton';
import Paginate from '../Components/Paginate/Paginate';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { urlCategori } from '../Redux/Slise/CategoriSlise';
import { ActiveSorting, urlSort } from '../Redux/Slise/SortSlise';
import { useRef } from 'react';
import { RootState, useAppDispatch } from '../Redux/store';
import { ParamsObj, fetchPizza } from '../Redux/AsynsAction/FetchPizzaThunk';

const Home:React.FC = () => {
  const { search } = React.useContext(SearchContext) as SearchContext;
  const navigate = useNavigate();
  const [currentPage, setcurrentPage] = React.useState(1);
  const isSearch = useRef(false);
  const isMoundet = useRef(false);
  const sceleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const activeCategor = useSelector((state:RootState) => state.categoriSlice.categori);
  const pizza = useSelector((state:RootState) => state.pizzaSlice.items);
  const activeSort = useSelector((state:RootState) => state.sortSlice.activeSort);
  const status = useSelector((state:RootState) => state.pizzaSlice.status);
  const sort = useSelector((state:RootState) => state.sortSlice.sort);

  const dispatch = useAppDispatch();
  const getPizzaz =  () => {
    const order = activeSort.sort.includes('-') ? 'asc' : 'desc';
    const sort = activeSort.sort.replace('-', '');
    const categori = activeCategor > 0 ? activeCategor : '';
    
    try {
       dispatch(fetchPizza({ order, sort, categori, currentPage } as ParamsObj));
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sorting = sort.find((obj:ActiveSorting) => obj.sort === params.activeSort);
      dispatch(urlCategori(Number(params.activeCategor) ));
     if (sorting) {
      dispatch(urlSort({ ... sorting }));
     }
     

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    getPizzaz();
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
        <Sort activeSort={activeSort}  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error">
          <h3>😕Произошла ошибка!</h3>
          <h4>Попробуйте позже.</h4>
        </div>
      ) : (
        <div>
          <div className="content__items">{status === 'loading' ? sceleton : <>{pizzaz}</>}</div>
          <Paginate setcurrentPage={setcurrentPage} />
        </div>
      )}
    </div>
  );
}
export default Home
