import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import Link from 'next/link';

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const n = await getNewsDetails(id);
  return (
    <>
      <h1 className='font-bold text-2xl mb-4'>Dragon News</h1>

      <div className='bg-base-200 p-5' >

        <div className='space-y-2'>
          <h1 className='font-bold text-2xl my-1'> {n.title}</h1>
          <Image
            src={n.image_url}
            alt={n.title}
            width={300}
            height={300}
            className='w-full'
          />
          <p>{n.details}</p>
          <div className='flex justify-between'>
            <div></div>

            <Link href={`/category/${n.category_id}`}>
              <button className='btn btn-outline btn-secondary'>All news in this category <FaArrowRight /></button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default NewsDetailsPage;