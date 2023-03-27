import React from 'react';

export default function Categories({ activeCategor, setActiveCategor }) {
  const categoriesName = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div>
      <div className="categories">
        <ul>
          {categoriesName.map((names, i) => (
            <li
              onClick={() => setActiveCategor(i)}
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
