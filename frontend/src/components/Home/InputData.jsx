import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import axios from 'axios';
const InputData = ({ inputDiv, setInputDiv, updatedData, setUpdatedData }) => {
  
  const [data, setData] = useState({ title:"", description:"" });

  useEffect(() => {
      setData({ title: updatedData.title, description: updatedData.description });
  }, [updatedData]);

  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
     const { name, value } = e.target;
     setData({ ...data, [name]:value });
  }
  const submitData = async() => {
    if(data.title === "" || data.description === ""){
      alert("All fields are required");
    }else{
      await axios.post('http://localhost:3000/api/v2/createTask', data, {headers}); 
      setData({ title:"", description:"" });
      setInputDiv('hidden');
      window.location.reload(true);
    }
  }

  const updateTask = async() => {
    if(data.title === "" || data.description === ""){
      alert("All fields are required");
    }else{
      await axios.put(`http://localhost:3000/api/v2/updateTask/${updatedData.id}`, data, {headers}); 
      setData({ title:"", description:"" });
      setUpdatedData({id:"", title:"", description:""});
      setInputDiv('hidden');
      window.location.reload(true);
    }
  };
  return (
    <>
        <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
        <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
            
            <div className='w-2/6 bg-gray-900 p-5 rounded'>
                <div className='flex justify-end p-1 text-gray-300 mb-2'> 
                    <button onClick={() => {
                      setInputDiv('hidden');
                      setData({title:"", description:""});
                      setUpdatedData({id:"", title:"", description:""});
                      }}> <ImCross /> </button>
                </div>
                <input 
                  type="text" 
                  placeholder='Enter Title' 
                  name='title' 
                  value={data.title}
                  className='bg-gray-500 px-3 py-2 rounded w-full my-2'
                  onChange={change}
                  />
                <textarea 
      
                  name='description' 
                  placeholder='Enter Description'
                  value={data.description} 
                  className='bg-gray-500 px-3 py-2 rounded w-full my-2 h-[30vh]'
                  onChange={change}
                  />
                  {updatedData.id === "" ? (
                    <button 
                      className='px-3 py-2 bg-blue-600 rounded text-white font-semibold'
                    onClick={submitData}>
                      SUBMIT
                    </button>) : 
                     (
                     <button 
                       className='px-3 py-2 bg-blue-600 rounded text-white font-semibold'
                       onClick={updateTask}>
                        UPDATE
                      </button>)
                    }
                  
                
            </div>
        </div>
    </>
    
  )
}

export default InputData
