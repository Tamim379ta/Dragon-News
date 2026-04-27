import Image from 'next/image';
import Link from 'next/link';
import LoginImg from '@/assets/user.png'
import React from 'react';

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between  mt-5'>

      <div></div>
      <ul className='flex gap-4'>
        <li>
          <Link href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link href={'/Career'}>
            Career
          </Link>
        </li>
      </ul>

      <div className='flex gap-2'>
        <Image src={LoginImg} alt='Login' width={40} height={40}/>
        <button className='btn btn-neutral text-white'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;