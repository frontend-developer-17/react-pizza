import React from 'react';
import { setCategori } from '../Redux/Slise/CategoriSlise';
import { useDispatch } from 'react-redux';
type CategoriesProps={
  activeCategor:number,
  setcurrentPage:(page:number)=>void
}
const Categories:React.FC<CategoriesProps>= React.memo(({ activeCategor, setcurrentPage }) => {
  const dispatch = useDispatch();
  const categoriesName = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const onChangeCategory = (id:number) => {
    dispatch(setCategori(id));
    setcurrentPage(1);
  }
console.log("categories");

  return (
    <div>
      <div className="categories">
        <ul>
          {categoriesName.map((names, i) => (
            <li
              onClick={() => onChangeCategory(i)}
              className={activeCategor === i ? 'active' : ''}
              key={i}>
              {names}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})
export default Categories
