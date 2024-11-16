import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from "../../store/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear("id");
    localStorage.clear("token");
    history('/signup');
  }

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
      <div>
        <h2 className='text-xl font-semibold'>Abhishek Naik</h2>
        <h4 className='mb-1 text-gray-400'>abc@gm.com</h4>
        <hr/>
      </div>
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
