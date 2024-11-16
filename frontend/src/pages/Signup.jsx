import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' h-[97vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-bold flex justify-center mb-2'>SignUp</div>
            <input name='username' type="username" placeholder='Enter Username' className='bg-gray-700 px-3 py-2 my-3 w-full rounded' />
            <input name='email' type="email" placeholder='Enter Email' className='bg-gray-700 px-3 py-2 my-3 w-full rounded' required />
            <input name='password' type="password" placeholder='Enter Password' className='bg-gray-700 px-3 py-2 my-3 w-full rounded' required />
            
            <div className=' w-full flex justify-between items-end'>
                <button className='bg-blue-500 mt-3 font-semibold px-3 py-2 rounded'>Sign Up</button>
                <Link className='text-gray-400 hover:text-gray-200 px-2' to={'/login'}>Already account exists? LogIn</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Signup
