import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";


const Sidebar = () => {

  const data = [
    {
      title: 'All Tasks',
      icon: <CgNotes />,
    },
    {
      title: 'Important Tasks',
      icon: <MdLabelImportant />,
    },
    {
      title: 'Completed Tasks',
      icon: <FaCheckDouble />

    },
    {title: 'Incomplete Tasks',
      icon: <TbNotebookOff />
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
          <div className='my-2 flex items-center text-xl hover:bg-gray-600 p-2 rounded transition-all duration-300'>
            {item.icon} &nbsp;
            {item.title}
          </div>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded'>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar
