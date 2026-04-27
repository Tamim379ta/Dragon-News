import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LeftBar = () => {
  return (
    <div>

      <h1 className='font-bold mb-3' >Login With</h1>

      <div className='flex flex-col gap-2'>
        <button className='btn border border-sky-500'> <FaGoogle/>  Login with Google</button>
        <button className='border btn border-black'> <FaGithub/>  Login with Github</button>
      </div>
    </div>
  );
};

export default LeftBar;