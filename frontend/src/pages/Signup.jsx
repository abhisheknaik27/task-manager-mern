import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Signup = () => {
  const history = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if(isLoggedIn === true){
    history("/");
  } 
  const [data, setData] = useState({username: "", email: "", password: ""});
  
  
  
  const change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]:value});
  };

  const submit = async() => {
    try{
      if(data.username === "" || data.email === "" || data.password === ""){
        alert("All Fields are Required");
      } else {
        const response = await axios.post("http://localhost:3000/api/v1/signin", data);
        setData({username: "", email: "", password: ""});
        console.log(response.data.msg);
        history('/login');
      }
    }catch(err){
      alert(err.response.data.msg);
    }
  }
  
  return (
    <div className=' h-[97vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-bold flex justify-center mb-2'>SignUp</div>
            <input 
              onChange={change} 
              name='username' 
              type="username" 
              placeholder='Enter Username' 
              value={data.username}
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded' />

            <input 
              onChange={change} 
              name='email' 
              type="email" 
              placeholder='Enter Email' 
              value={data.email}
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded' 
              required />

            <input 
              onChange={change} 
              name='password' 
              type="password" 
              placeholder='Enter Password' 
              value={data.password}
              className='bg-gray-700 px-3 py-2 my-3 w-full rounded' 
              required />
            
            <div className=' w-full flex justify-between items-end'>
                <button className='bg-blue-500 mt-3 font-semibold px-3 py-2 rounded' onClick={submit}>
                  Sign Up
                </button>
                <Link className='text-gray-400 hover:text-gray-200 px-2' to={'/login'}>Already account exists? LogIn</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Signup
