import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [dataF, setDataF] = useState({
    fname: "",
    lname:"",
    email: "",
    password: ""
  });

  const [submit, setSubmit] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataF({ ...dataF, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit([...submit, dataF]);


    setDataF({
      fname: "",
      lname:"",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="container p-5 d-flex justify-content-center">
        <form className="row g-3 card p-4" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label className="form-label">First Name</label>
            <input
              id="fname"
              name="fname" 
              type="text"
              value={dataF.fname}
              className="form-control"
              placeholder="First name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Last Name</label>
            <input
              id="lname"
              name="lname" 
              type="text"
              value={dataF.lname}
              className="form-control"
              placeholder="last name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={dataF.email}
              className="form-control"
              placeholder="yourmail@email.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={dataF.password}
              className="form-control"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 m-4">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <h2 className="text-center mb-4">Submitted Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {submit?.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data?.fname}</td>
              <td>{data?.lname}</td>
              <td>{data?.email}</td>
              <td>{data?.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
