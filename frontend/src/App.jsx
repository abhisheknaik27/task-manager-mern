import React from 'react'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import ImpTasks from './pages/ImpTasks';
import CompTasks from './pages/CompTasks';
import IncompTasks from './pages/IncompTasks';

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-3'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} >
            <Route index element={<AllTasks />} />
            <Route path='/importantTasks' element={<ImpTasks />} />
            <Route path='/completedTasks' element={<CompTasks />} />
            <Route path='/incompleteTasks' element={<IncompTasks />} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
