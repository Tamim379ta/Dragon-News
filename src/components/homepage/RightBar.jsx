import Link from 'next/link';
import React from 'react';

const RightBar = ({ category, activeId }) => {
  return (
    <div className='flex flex-col gap-1'>

      <h1 className='font-bold  mb-2'>All Category</h1>

      {
        category.news_category.map(c => {
          return (
            <div
              key={c.category_id}
              className={`${c.category_id === activeId && "bg-base-300"} text-center font-semibold border border-gray-300`}
            >
              <Link
              className='block  p-2'
               href={`/category/${c.category_id}`}>{c.category_name}</Link>
            </div>
          )
        })
      }
    </div>
  );
};

export default RightBar;