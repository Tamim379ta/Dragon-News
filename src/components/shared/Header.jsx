import Image from 'next/image';
import HeaderImage from '@/assets/logo.png'
import { format } from "date-fns";
import React from 'react';

const Header = () => {
  return (
    <div className='my-5 space-y-2'>
      <Image className='mx-auto' src={HeaderImage} alt='Logo' height={300} width={400} />

      <h1 className='text-md text-center'>Journalism Without Fear or Favour</h1>

      <div className="flex justify-center">
        {format(new Date(), "EEEE, MMMM, dd, yyyy")}
      </div>

    </div>
  );
};

export default Header;