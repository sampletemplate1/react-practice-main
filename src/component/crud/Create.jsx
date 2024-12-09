import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        id:"",
        name: "",
        age: "",
        salary: "",
      });
      const handleChange = (e) => {
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
      };
const postDataHandler=(e)=>{
  e.preventDefault();
    let body = {
        id:formData.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
    axios.post('http://localhost:3000/emp',body).then((resp)=>{
        alert("data added");
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
      value={formData.id}
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
      value={formData.name}
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
      value={formData.email}
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
      value={formData.phone}
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
