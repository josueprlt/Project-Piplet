import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchAllCategories } from '../../lib/loaders';


export default function CategoryList() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchAllCategories()
      .then(data => setCategories(data))
      .catch(error => console.error('Erreur lors de la récupération des catégories:', error));
  }, []);

  if (!categories) {
    return <div className="text-white w-screen py-5 text-center">Loading...</div>;
  }

  return (
    <ul className='flex gap-1 px-5 md:px-24 py-10 overflow-x-auto'>
      {categories.map(category => (
        <li key={category.id}>
          <Link to={'http://localhost:8090/category/'+category.id} className='bg-colorBgBtnCate text-colorWhite hover:bg-colorBorderBlue py-3 px-5'>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}