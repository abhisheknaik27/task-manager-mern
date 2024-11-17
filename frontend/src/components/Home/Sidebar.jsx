import React, { useEffect, useState } from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from "../../store/auth";
import axios from 'axios';

const Sidebar = () => {
  const [taskData, setTaskData] = useState();
  const dispatch = useDispatch();
  const history = useNavigate();
  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear("id");
    localStorage.clear("token");
    history('/signup');
  }

  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get("http://localhost:3000/api/v2/allTasks", {headers});
      setTaskData(response.data.data);
    };
    if(localStorage.getItem('id') && localStorage.getItem('token')){
      fetch();
    }
  }, [])

  const data = [
    {
      title: 'All Tasks',
      icon: <CgNotes />,
      link: '/'
    },
    {
      title: 'Important Tasks',
      icon: <MdLabelImportant />,
      link: '/importantTasks'
    },
    {
      title: 'Completed Tasks',
      icon: <FaCheckDouble />,
      link: '/completedTasks'

    },
    {title: 'Incomplete Tasks',
      icon: <TbNotebookOff />,
      link: '/incompleteTasks'
    },
  ];

  return (
    <>
      {taskData && (
        <div>
          <h2 className='text-xl font-semibold'>{taskData.username}</h2>
          <h4 className='mb-1 text-gray-400'>{taskData.email}</h4>
          <hr/>
        </div>
      )}
      
      <div>
        {data.map((item,i) => (
          <Link to={item.link} key={i} className='my-2 flex items-center text-xl hover:bg-gray-600 p-2 rounded transition-all duration-300'>
            {item.icon} &nbsp;
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded' onClick={logout }>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar
