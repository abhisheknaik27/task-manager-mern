import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import ImpTasks from './pages/ImpTasks';
import CompTasks from './pages/CompTasks';
import IncompTasks from './pages/IncompTasks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if(localStorage.getItem('id') && localStorage.getItem('token')){
      dispatch(authActions.login());
    } else if(!isLoggedIn){
      navigate('/signup');
    }
  }, []);


  return (
    <div className='bg-gray-900 text-white h-screen p-3 relative'>
      
        <Routes>
          <Route exact path='/' element={<Home />} >
            <Route index element={<AllTasks />} />
            <Route path='/importantTasks' element={<ImpTasks />} />
            <Route path='/completedTasks' element={<CompTasks />} />
            <Route path='/incompleteTasks' element={<IncompTasks />} />
          </Route>
          
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      
      
    </div>
  )
}

export default App
