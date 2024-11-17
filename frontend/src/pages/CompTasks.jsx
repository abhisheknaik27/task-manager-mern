import React, { useEffect, useState } from 'react'
import Cards from '../components/Home/Cards'
import axios from 'axios';

const CompTasks = () => {
  const [data, setData] = useState();
  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get("http://localhost:3000/api/v2/completeTasks", { headers });
      setData(response.data.data);
    };
    fetch();
  },[]);
  return (
    <div>
      <Cards home={"false"} data={data}/>
    </div>
  )
}

export default CompTasks
