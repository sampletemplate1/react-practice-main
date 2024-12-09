import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Edit() {
const {id} = useParams();
    const [data,setData]=useState(
        {
                id:'',
                name: '',
                age: '',
                salary:'',
             }
    );
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/emp/' + id)
          .then((res)=>setData(res.data))
          .catch((err)=>console.log(err));
      },[]);
   
      const handleChange = (e) => {
        const{name,value}=e.target;
        setData({...data,[name]:value})
      };
const postDataHandler=(e)=>{
  e.preventDefault();
    
    axios.put('http://localhost:3000/emp/' + id, data)
    .then((resp)=>{
        alert("data edited");
        navigate('/chome');
    });
}
  return (
        <div>
        <div className="container p-5 d-flex justify-content-center">
<form className="row g-3 card p-4">
<div className="col-md-12">
    <label className="form-label lab">Id</label>
    <input
      name="id" 
      type="number"
      className="form-control"
      placeholder="your id here"
      onChange={handleChange}
      value={data.id}
    />
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Name</label>
    <input
      name="name" 
      type="text"
      className="form-control"
      placeholder="enter your name"
      onChange={handleChange}
      value={data.name}
    />
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Email ID</label>
    <input
      name="email"
      type="email"
      className="form-control"
      placeholder="yourmail@email.com"
      onChange={handleChange}
      value={data.email}
    />
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Phone</label>
    <input
      name="phone"
      type="text"
      className="form-control"
      placeholder="your phone number here"
      onChange={handleChange}
      value={data.phone}
    />
  </div>
  <div className="col-12 m-4">
    <button type="submit" className="btn btn-primary" onClick={postDataHandler}>
      Add
    </button>
  </div>
</form>
</div>
    </div>
  )
}
