import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function New() {
    const regexp= '!/^\d+$/'
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Input validation
    const validateForm = ()=>{
        const error = {
            id: "",
            name: "",
            email: "",
            phone: "",  
        };

        if (name === "id") {
            if (!value) {
              error = "ID is required.";
            } else if (!regexp.test(value)) {
              error = "ID must be a number.";
            }
          } else if (name === "name") {
            if (!value) {
              error = "Name is required.";
            } else if (value.length < 2) {
              error = "Name is too short.";
            }
          } else if (name === "email") {
            if (!value) {
              error = "Email is required.";
            } else if (!/^\S+@\S+\.\S+$/.test(value)) {
              error = "Invalid email format.";
            }
          } else if (name === "phone") {
            if (!value) {
              error = "Phone is required.";
            } else if (!/^\d{10}$/.test(value)) {
              error = "Phone number must be 10 digits.";
            }
          }
      
          setErrors({ ...errors, [name]: error });
        };
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    // Check if there are any validation errors before posting data
    if (!Object.values(errors).some((error) => error)) {
      let body = {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
      axios.post('http://localhost:3000/emp', body).then((resp) => {
        alert("Data added");
        navigate('/whome');
      });
    } else {
      alert("Please fix the validation errors before submitting the form.");
    }
  };

  return (
    <div>
      <div className="container p-5 d-flex justify-content-center">
        <form className="row g-3 card p-4">
          <div className="col-md-12">
            <label className="form-label lab">Id</label>
            <input
              name="id"
              type="type"
              className="form-control"
              placeholder="Your ID here"
              maxLength={5}
              onChange={handleChange}
              value={formData.id}
            />
            <div className="text-danger">{errors.id}</div>
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
            />
            <div className="text-danger">{errors.name}</div>
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
            <div className="text-danger">{errors.email}</div>
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Phone</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              placeholder="Your phone number here"
              onChange={handleChange}
              value={formData.phone}
            />
            <div className="text-danger">{errors.phone}</div>
          </div>
          <div className="col-12 m-4">
            <button type="submit" className="btn btn-primary" onClick={postDataHandler}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
