import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      
      <p className="text-xl text-gray-400 mb-6 text-center">
        Oops! The page youre looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;