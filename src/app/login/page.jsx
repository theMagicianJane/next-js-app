'use client'
import { useForm } from 'react-hook-form';
import login from '../../app/api/login'


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit(data => login(data))}>
        <div>
          <label htmlFor="email" className="block text-sm/12 font-medium text-gray-900">Email address</label>
          <div className="mt-2">
            <input type="email" name="email" id="email" autoComplete="email" required
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                   {...register('email', { required: true })}
            />
            {errors.email && <p>Email is required.</p>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/12 font-medium text-gray-900">Password</label>
          </div>
          <div className="mt-2">
            <input type="password" name="password" id="password" autoComplete="current-password" required
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                   {...register('password', { required: true })}
            />
            {errors.password && <p>Password is required.</p>}
          </div>
        </div>

        <div>
          <input type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
        </div>
      </form>
    </div>
)
}
