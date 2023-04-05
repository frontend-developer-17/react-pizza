import React from 'react';
import { setCategori } from '../Redux/CategoriSlise';
import { useDispatch, useSelector } from 'react-redux';

export default function Categories({ activeCategor, setcurrentPage }) {
  const dispatch = useDispatch();
  const categoriesName = useSelector((state) => state.categoriSlice.categoriesName);

  const onChangeCategory = React.useCallback((id) => {
    dispatch(setCategori(id));
    setcurrentPage('');
  }, []);

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
}
