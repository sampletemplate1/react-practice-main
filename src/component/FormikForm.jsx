import { useFormik } from 'formik';
import './formikform.css';
import React, { useState } from 'react'
import * as Yup from "yup";

const initialvalues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
};

export default function FormikForm() {
  const validationSchema = Yup.object({
    name: Yup.string().min(6).max(15).required("Please enter your name"),
    email: Yup.string().email("Invalid email address").required("This field is required"),
    password: Yup.string().min(3).required("This field is required"),
    cpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("This field is required")
  });

  const [formData, setFormData] = useState([]);
const [editIndex,setEditIndex]=useState(null);

  const { handleBlur, handleChange, handleSubmit, resetForm, values, touched, errors } =
    useFormik({
      initialValues: initialvalues,
      validationSchema,
      onSubmit: (values, action) => {
      if(editIndex==null){
        setFormData([...formData, values]);
      }
      else{
        const updateData=[...formData];
        updateData[editIndex]=values;
        setFormData(updateData);
        setEditIndex(null);
        resetForm();
      }
     
      }
    });

    const remove = (index) =>{
      const removeOne= [...formData];
      removeOne.splice(index,1);
      setFormData(removeOne);
    }
    const handleEdit=(index)=>{
      setEditIndex(index);
      const update = formData[index];
      values.name=update.name;
      values.email=update.email;
      values.password=update.password;
      values.cpassword=update.cpassword;
    }

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
    <label className="form-label lab">Email ID</label>
    <input
      name="email"
      type="email"
      className="form-control"
      placeholder="yourmail@email.com"
      value={values?.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.email && touched.email && <div>{errors.email}</div> }
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Password</label>
    <input
      name="password"
      type="password"
      className="form-control"
      placeholder="Password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.password && touched.password && <div>{errors.password}</div> }
  </div>
  <div className="col-md-12">
    <label className="form-label lab">Confirm Password</label>
    <input
      name="cpassword"
      type="password"
      className="form-control"
      placeholder="Confirm Password"
      value={values.cpassword}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.cpassword && touched.cpassword  && <div>{errors.cpassword}</div>}
  </div>
  <div className="col-12 m-4">
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </div>
</form>
</div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button className='btn btn-primary m-1' onClick={()=>handleEdit(index)}>Edit</button>
                <button className='btn btn-primary m-1' onClick={()=>remove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
