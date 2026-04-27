"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {

  const pathName = usePathname()
  const IsActive = pathName === href
  return (

      <Link
      className={`${IsActive && 'border-b-3 border-b-purple-600'}`}
       href={href}>{children}</Link>


  );
};

export default Navlink;