import Image from 'next/image';
import Navlink from './Navlink';
import LoginImg from '@/assets/user.png'
import React from 'react';

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
        <button className='btn btn-neutral text-white'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;