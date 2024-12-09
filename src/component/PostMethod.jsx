import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from "yup";
const initialvalues={
    name:'',
    age:'',
    salary:''
};

export default function PostMethod() {
    const validationSchema=Yup.object({
        name:Yup.string().min(4).max(15).required("Please enter your name"),
        age:Yup.number().min(10).max(190).required("This field is required"),
        salary:Yup.number().min(100).max(99999).required("This field is required")
    })
    const [formData,setFormData]=useState([]);
    const {handleBlur,handleChange,handleSubmit,values,touched,errors}=
    useFormik({
        initialValues:initialvalues,
        validationSchema,
        // onSubmit:(values,action)=>{
        //     setFormData([...formData,values]);
        //     action.resetForm();
        // }
        onSubmit:(values)=>{
            let body={
                name:values?.name,
                salary:values?.salary,
                age:values?.age
            };
            axios.post("https://dummy.restapiexample.com/api/v1/create",body).then((resp)=>{
                console.log("resp",resp);
                if(resp?.data?.status=="success"){
                    alert("data added");
                }
            })
        }
    })
  return (
    <div>
         <div className="container p-5 d-flex justify-content-center">
        <form className="row g-3 card p-4" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label className="form-label lab">Name</label>
            <input
              name="name" 
              type="text"
              className="form-control"
              placeholder="enter your name"
              value={values?.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <div>{errors.name}</div> }
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Salary</label>
            <input
              name="salary"
              type="text"
              className="form-control"
              placeholder="your salary"
              value={values?.salary}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.salary && touched.salary && <div>{errors.salary}</div> }
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Salary</label>
            <input
              name="age"
              type="text"
              className="form-control"
              placeholder="your age"
              value={values?.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && touched.age && <div>{errors.age}</div> }
          </div>
          <div className="col-12 m-4">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
