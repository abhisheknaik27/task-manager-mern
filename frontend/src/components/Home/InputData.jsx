import React from 'react'
import { ImCross } from "react-icons/im";

const InputData = ({ inputDiv, setInputDiv }) => {
  return (
    <>
        <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
        <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
            
            <div className='w-2/6 bg-gray-900 p-5 rounded'>
                <div className='flex justify-end p-1 text-gray-300 mb-2'> 
                    <button onClick={() => setInputDiv('hidden')}> <ImCross /> </button>
                </div>
                <input type="text" placeholder='Enter Title' name='title' className='bg-gray-500 px-3 py-2 rounded w-full my-2'/>
                <textarea name='desc' placeholder='Enter Description' className='bg-gray-500 px-3 py-2 rounded w-full my-2 h-[30vh]'/>
                <button className='px-3 py-2 bg-blue-600 rounded text-white font-semibold'>SUBMIT</button>
            </div>
        </div>
    </>
    
  )
}

export default InputData
