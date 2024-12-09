import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const initialvalues = {
    id:'',
    name: '',
    email: '',
    phone:''
  };
export default function VHome() {
   
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/emp").then(res=>setData(res.data)).catch(err=>console.log(err));
  },[])

  const handleDelete=(id)=>{
    const confirm=window.confirm("Would you like to delete?");
    if(confirm){
      axios.delete(`http://localhost:3000/emp/${id}`).then(res=>{
        window.location.reload();
      }).catch(err=>console.log(err));
    }
  }


  return (
    <div>
      <Link to="/add" className="btn btn-primary">Add</Link>
        <table className='table table-bordered'>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                <button className='btn btn-primary m-1'><Link className='text-white text-decoration-none' to={`/update/${item.id}`}>Update</Link></button>
                <button className='btn btn-primary m-1' onClick={()=>handleDelete(item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
