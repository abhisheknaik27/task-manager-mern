import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Cards = ({ home, setInputDiv, data }) => {

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && data.map((item, i) => (
            <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                <div>
                    <h3 className='text-xl font-semibold'>{item.title}</h3>
                    <p className='text-gray-300 my-2'>{item.description}</p>
                </div>
                <div className='mt-4 w-full flex justify-between items-center'>
                    <button className={`${item.complete == false ? 'bg-red-400' : 'bg-green-600'} rounded p-2`}>
                        {item.complete === true ? "Completed" : "Incomplete"}
                    </button>
                    <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                        <button><CiHeart /></button>
                        <button><FaEdit /></button>
                        <button><MdDelete /></button>
                    </div>
                </div>
            </div>
            
        ))}
        {home === 'true' && 
            <button onClick={() => setInputDiv('fixed')} className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
        
                <IoIosAddCircle className='text-4xl' />
                <h2 className='text-2xl mt-4'>Add Task</h2>
            </button>}
        
    </div>
  )
}

export default Cards
