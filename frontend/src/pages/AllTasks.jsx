import React, { useEffect, useState } from 'react'
import Cards from '../components/Home/Cards'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../components/Home/InputData';
import axios from 'axios';

const AllTasks = () => {
  const [inputDiv ,setInputDiv] = useState('hidden');
  const [taskData, setTaskData] = useState();
  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get("http://localhost:3000/api/v2/allTasks", {headers});
      setTaskData(response.data.data);
    };
    fetch()
  }, [])
  console.log(taskData); 
  return (
    <>
      <div>
        <div className='w-full flex justify-end px-4 py-2'>
            <button onClick={() => setInputDiv('fixed')}>
              <IoIosAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
            </button>
        </div>
        {taskData && <Cards home={"true"} setInputDiv={setInputDiv} data={taskData.tasks}/>}
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
    </>
  )
}

export default AllTasks
