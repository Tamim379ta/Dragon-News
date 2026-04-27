"use client"

import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
     console.log(data, "data");

  }
  return (
    <div className='flex justify-center mt-10'>
      <form  onSubmit={handleSubmit(handelLogin)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend font-semiboldbold text-xl">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          {...register("email", {
            required: "Email field is required",
          })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          {...register("password", {
            required: "Password field is required",
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <button className="btn btn-neutral mt-4">Login</button>

        <p className='mt-2'>Dont have any Account ? <Link href='/register' className='text-secondary underline'>Register</Link></p>
      </fieldset>

      </form>

    </div>
  );
};

export default LoginPage;