import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';


const NewsSection = ({ n }) => {
  return (
    <div className='bg-base-200 p-5' >

      <div className='flex justify-between bg-base-300 p-2 rounded-md'>
        <div className='flex gap-2'>
          <Image
            src={n.author.img}
            alt={n.author.name}
            width={50}
            height={50}
            className='rounded-full'
          />

          <div className='space-y-1'>
            <h1>{n.author.name}</h1>
            <p>{n.author.published_date}</p>
          </div>

        </div>

        <div className='text-2xl flex gap-2 items-center'>
          <CiBookmark />
          <CiShare2 />
        </div>

      </div>

      <div className='space-y-2'>
        <h1 className='font-bold text-2xl my-1'> {n.title}</h1>
        <Image
          src={n.image_url}
          alt={n.title}
          width={300}
          height={300}
          className='w-full'
        />
        <p className='line-clamp-3'>{n.details}</p>
        <div className='flex justify-between'>

          <div className='flex gap-2 items-center'>
            <p className='flex gap-1 items-center'> <FaStar className='text-xl text-yellow-400' /> {n.rating.number}</p>
            <p className='flex gap-1 items-center'> <IoEyeOutline /> {n.total_view}</p>
          </div>

          <Link href={`/news/${n._id}`}>
            <button className='btn btn-outline btn-secondary'>See Details <FaArrowRight /></button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NewsSection;