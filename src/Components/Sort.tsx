import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveSorting, setCurrentSort } from '../Redux/Slise/SortSlise';
import { RootState } from '../Redux/store';

type SortProps={
  activeSort:{name:string, sort:string},  
  
  
}


const Sort:React.FC<SortProps> = React.memo(({ activeSort  })=> {
  console.log("Sort");
  
  const dispatch = useDispatch()
  const sort = useSelector((state:RootState) => state.sortSlice.sort);

  const [open, setOpen] = React.useState(false);
  const bodiRef = React.useRef<HTMLDivElement>(null);
  const currentCategories = (obj:ActiveSorting) => {
    dispatch(setCurrentSort(obj));
   
    setOpen(false);
  };
  React.useEffect(() => {
    const handleClik = (event:MouseEvent) => {
      if (bodiRef.current&&!event.composedPath().includes(bodiRef.current)) {
        setOpen(false);
      
      }
    };
    document.body.addEventListener('click', handleClik);
    return () => {
      document.body.removeEventListener('click', handleClik);
    };
  }, []);

  return (
    <div>
      <div className="sort" ref={bodiRef}>
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}> {activeSort.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {sort.map((obj, i:number) => (
                <li
                  onClick={() => currentCategories(obj)}
                  className={activeSort.sort === obj.sort ? 'active' : ''}
                  key={i}>
                  {obj.name}
                 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
})
export default Sort
