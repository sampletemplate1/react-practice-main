import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Show() {
    const {id} = useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
      axios.get(`http://localhost:3000/emp/${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[]);
    // const ShowData=()=>{
    //     axios.get("http://localhost:3000/emp/" +id).then((res)=>setData(res.data)).catch((err)=>console.log(err));
    // }
  return (
    <div className='container justify-content-center d-flex'>
<div className='card p-3'>
Name:{data.name}<br/>
Email:{data.email} <br/>
Phone:{data.phone}

</div>
    </div>
  )
}
