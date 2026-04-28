"use client"

import Image from 'next/image';
import Navlink from './Navlink';
import LoginImg from '@/assets/user.png'
import React from 'react';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client"

const Navbar = () => {

  const { data: session } = authClient.useSession()

  const user = session?.user;

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

      {
        user ? (<div className='flex  items-center gap-2'>
          <p> Hello {user.name}</p>
          <Image src={LoginImg} alt='Login' width={40} height={40} />
          <button onClick={ async() => await authClient.signOut()} className='btn btn-neutral text-white'>Logout</button>
        </div>) :
          (
            <Link  href={'/login'} className='btn btn-neutral text-white'>LogIn</Link>
          )
     }
    </div>
  );
};

export default Navbar;