import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[97vh] flex items-center justify-center'>
        <div className='bg-gray-800 w-2/6 p-4 rounded'>
            <div className='text-2xl font-bold flex justify-center mb-2'>Log In</div>
            <input type="email" name='email' placeholder='Enter Email' className='px-3 py-2 rounded bg-gray-700 w-full my-2 ' required/>
            <input type="password" name='password' placeholder='Enter Password' className='px-3 py-2 rounded bg-gray-700 w-full my-2 ' required/>
            
            <div className='w-full flex justify-between items-end'>
                <button className=' bg-blue-400 font-semibold rounded px-3 py-2 mt-2 mb-1' >LOGIN</button>
                <Link className='text-gray-400 hover:text-gray-200 px-2' to={"/signup"}>Not having account? SignUp here</Link>
            </div>
            
            
            
        </div>
      
    </div>
  )
}

export default Login
