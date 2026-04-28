"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {

    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password, 

      callbackURL: "/",
    });

     if (error) {
    console.error(error);
    return;
  }

    console.log(res)
  }
  return (
    <div className='flex justify-center mt-10'>

      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend font-semibold text-xl">Register</legend>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
             {...register("name", {
              required: "name field is required",
            })}
             />
              {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}

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
              required: "password field is required",
            })}
            />
             {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>

          <p className='mt-2'>Already have an Account ? <Link href='/login' className='text-secondary underline'>Login</Link></p>
        </fieldset>
      </form>

    </div>
  );
};

export default RegisterPage;