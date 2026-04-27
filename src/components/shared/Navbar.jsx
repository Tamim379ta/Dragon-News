import Image from 'next/image';
import Navlink from './Navlink';
import LoginImg from '@/assets/user.png'
import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between  mt-5'>

      <div></div>
      <ul className='flex gap-4'>
        <li>
          <Navlink href={'/'}>
            Home
          </Navlink>
        </li>
        <li>
          <Navlink href={'/about'}>
            About
          </Navlink>
        </li>
        <li>
          <Navlink href={'/career'}>
            Career
          </Navlink>
        </li>
      </ul>

      <div className='flex gap-2'>
        <Image src={LoginImg} alt='Login' width={40} height={40}/>
        <Link href={'/login'} className='btn btn-neutral text-white'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;