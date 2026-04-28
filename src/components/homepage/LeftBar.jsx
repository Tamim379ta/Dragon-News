"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LeftBar = () => {

  const handleGoogleSingIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  const handleGithubSingIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github"
    })
  }
  return (
    <div>

      <h1 className='font-bold mb-3' >Login With</h1>

      <div className='flex flex-col gap-2'>
        <button onClick={handleGoogleSingIn} className='btn border border-sky-500'> <FaGoogle />  Login with Google</button>
        <button onClick={handleGithubSingIn} className='border btn border-black'> <FaGithub />  Login with Github</button>
      </div>
    </div>
  );
};

export default LeftBar;