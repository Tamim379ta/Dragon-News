"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

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
    <div className='px-10 md:p-0'>

      <h1 className='font-bold mb-3' >Login With</h1>

      <div className='flex flex-col gap-2'>
        <button onClick={handleGoogleSingIn} className='btn border border-sky-500'> <FaGoogle />  Login with Google</button>
        <button onClick={handleGithubSingIn} className='border btn border-black'> <FaGithub />  Login with Github</button>
      </div>

      <div className=" mt-5 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Find Us On
        </h2>

        <div className="bg-white rounded-lg overflow-hidden border border-gray-300">

          {/* Facebook */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-300 hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaFacebookF className="text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">Facebook</span>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-300 hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaTwitter className="text-sky-500" />
            </div>
            <span className="text-gray-700 font-medium">Twitter</span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaInstagram className="text-pink-500" />
            </div>
            <span className="text-gray-700 font-medium">Instagram</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBar;