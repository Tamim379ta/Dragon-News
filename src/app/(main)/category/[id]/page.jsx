import LeftBar from '@/components/homepage/LeftBar';
import RightBar from '@/components/homepage/RightBar';
import NewsSection from '@/components/homepage/NewsSection';
import { getCategory, getNews } from '@/lib/data';
import React from 'react';

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;
  const category = await getCategory();
  const categoryNews = await getNews(id);
  return (
    <div className='grid grid-cols-12 gap-5 container mx-auto mt-5'>

      <div className='col-span-3'>
        <RightBar category={category} activeId={id} />
      </div>

      <div className='col-span-6 '>

        <div className='flex flex-col gap-10'>
          {
            categoryNews.length > 0 ? (
              categoryNews.map(n => <NewsSection key={n._id} n={n} ></NewsSection> ))
            
             : (<h1 className='text-center bg-base-200 font-bold mt-5  py-20  text-2xl'>No News Found</h1>)
          }
        </div>
      </div>

      <div className='col-span-3'>
        <LeftBar />
      </div>



    </div>
  );
};

export default CategoryNewsPage;