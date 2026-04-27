import React from 'react';
import Link from 'next/link';
const RegisterPage = () => {
  return (
    <div className='flex justify-center mt-10'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend font-semiboldbold text-xl">Register</legend>
        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Name" />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email" />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>

        <p className='mt-2'>Already have an Account ? <Link href='/login' className='text-secondary underline'>Login</Link></p>
      </fieldset>

    </div>
  );
};

export default RegisterPage;