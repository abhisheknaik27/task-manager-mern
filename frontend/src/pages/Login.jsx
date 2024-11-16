import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { authActions } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

  const [data, setData] = useState({ email: "", password: "" });

  const history = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if(isLoggedIn === true){
    history("/");
  } 

  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]:value});
  };

  const submit = async() => {
    try{
      if(data.email === "" || data.password === ""){
        alert("All Fields are Required");
      } else {
        const response = await axios.post("http://localhost:3000/api/v1/login", data);
        setData({ email: "", password: "" });
        
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        dispatch(authActions.login());
        history('/');
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='h-[97vh] flex items-center justify-center'>
        <div className='bg-gray-800 w-2/6 p-4 rounded'>
            <div className='text-2xl font-bold flex justify-center mb-2'>
              Log In
            </div>
            
            <input 
              type="email" 
              name='email' 
              placeholder='Enter Email' 
              className='px-3 py-2 rounded bg-gray-700 w-full my-2 ' 
              value={data.email}
              onChange={change}
              required/>

            <input 
              type="password" 
              name='password' 
              placeholder='Enter Password' 
              className='px-3 py-2 rounded bg-gray-700 w-full my-2 ' 
              value={data.password}
              onChange={change}
              required/>
            
            <div className='w-full flex justify-between items-end'>
                <button className=' bg-blue-400 font-semibold rounded px-3 py-2 mt-2 mb-1' onClick={submit}>
                  LOGIN
                </button>
                <Link className='text-gray-400 hover:text-gray-200 px-2' to={"/signup"}>Not having account? SignUp here</Link>
            </div>
            
            
            
        </div>
      
    </div>
  )
}

export default Login
