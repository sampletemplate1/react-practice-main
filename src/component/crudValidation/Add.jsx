import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
const initialvalues = {
    id:'',
    name: '',
    email: '',
    phone:''
  };
export default function Add() {
    const navigate=useNavigate();
      const validationSchema=Yup.object({
        id:Yup.number().min(1).max(1000).required("This field is required"),
        name:Yup.string().min(3).max(15).required("This field is required"),
        email:Yup.string().email("Invalid email address").required("This field is required"),
        phone:Yup.string().min(10).max(12).required("This field is required")
    });
    const{handleChange,handleSubmit,values,touched,errors}=useFormik({
        initialValues:initialvalues,
        validationSchema,
        onSubmit:(values)=>{
            let body = {
                id:values.id,
                name: values.name,
                email: values.email,
                phone: values.phone,
              };
              axios.post('http://localhost:3000/emp',body).then((resp)=>{
                alert("data added");
                navigate('/vhome');
            });

        }
    })

  return (
    <div>
        <div className="container p-5 d-flex justify-content-center">
<form className="row g-3 card p-4" onSubmit={handleSubmit}>
<div className="col-md-12">
    <label className="form-label lab">Id</label>
    <input
      name="id" 
      type="number"
      className="form-control"
      placeholder="your id here"
      onChange={handleChange}
      value={values.id}
    />
        {errors.id && touched.id && <div>{errors.id}</div> }
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Name</label>
    <input
      name="name" 
      type="text"
      className="form-control"
      placeholder="enter your name"
      onChange={handleChange}
      value={values.name}
    />
        {errors.name && touched.name && <div>{errors.name}</div> }
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Email ID</label>
    <input
      name="email"
      type="email"
      className="form-control"
      placeholder="yourmail@email.com"
      onChange={handleChange}
      value={values.email}
    />
        {errors.email && touched.email && <div>{errors.email}</div> }
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Phone</label>
    <input
      name="phone"
      type="text"
      className="form-control"
      placeholder="your phone number here"
      onChange={handleChange}
      value={values.phone}
    />
        {errors.phone && touched.phone && <div>{errors.phone}</div> }
  </div>
  <div className="col-12 m-4">
    <button type="submit" className="btn btn-primary">
      Add
    </button>
  </div>
</form>
</div>
    </div>
  )
}
