import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';

const Cards = ({ home, setInputDiv, data, setUpdatedData }) => { 

  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  

  const handleCompleteTask = async(id) => {
    try{
        const response = await axios.put(`http://localhost:3000/api/v2/updateCompleteTask/${id}`, 
        {},
        {headers}
        );
        console.log(response);
        window.location.reload(true);
    
    } catch(err){
        console.error("Failed to update task:", err);
        alert("Something went wrong while updating the task.");
    }
  };
  const handleImp = async(id) => {
    try{
        const response = await axios.put(`http://localhost:3000/api/v2/updateImpTask/${id}`, 
        {},
        {headers}
        );
        console.log(response);
        window.location.reload(true);
    
    } catch(err){
        console.error("Failed to update task:", err);
        alert("Something went wrong while updating the task.");
    }
  };

  const handleUpdate = async(id, title, description) => {
    setInputDiv('fixed');
    setUpdatedData({id: id, title: title, description: description});
  };

  const deleteTask = async(id) => {
   try{
        const response = await axios.delete(`http://localhost:3000/api/v2/deleteTask/${id}`,
        {headers}
        );
        console.log(response.data.msg);
        window.location.reload(true);
        
        } catch(err){
            console.error("Failed to update task:", err);
            alert("Something went wrong while deleting the task");
        }
  };


  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && data.map((item, i) => (
            <div key={item._id} className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                <div>
                    <h3 className='text-xl font-semibold'>{item.title}</h3>
                    <p className='text-gray-300 my-2'>{item.description}</p>
                </div>
                <div className='mt-4 w-full flex justify-between items-center'>
                    <button 
                    className={`${item.complete === false ? 'bg-red-400' : 'bg-green-600'} rounded p-2 w-3/6`}
                    onClick={() => handleCompleteTask(item._id)}
                    >
                        {item.complete === true ? "Completed" : "Incomplete"}
                    </button>
                    <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                        <button onClick={() => handleImp(item._id)}>

                        {item.important === false ? <CiHeart /> : <FaHeart className='text-red-500' />}
                            
                        </button>

                        {home !== "false" && <button onClick={() => handleUpdate(item._id, item.title, item.description)}><FaEdit /></button>}
                        
                        <button onClick={() => deleteTask(item._id)}><MdDelete /></button>
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
