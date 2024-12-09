import React, { useState } from "react";
import axios from "axios";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const handleChange = (e) => {
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  };

  const showData = () => {
    getDataHandler();
  };
  const [data, setData] = useState([]);
  const getDataHandler = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setData(resp?.data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postDataHandler();
  };
    const postDataHandler = () => {
        let body = {
            name: formData.name,
            age: formData.age,
            salary: formData.salary,
          };
      axios.post("https://dummy.restapiexample.com/api/v1/create", body)
        .then((resp) => {
          console.log("resp", resp);
          if (resp?.data?.status == "success") {
            alert("data added");
          }
        });
    };
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
              value={formData?.name}
              onChange={handleChange}
              //   onBlur={handleBlur}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Age</label>
            <input
              name="age"
              type="number"
              min={18}
              max={150}
              className="form-control"
              placeholder="your age"
              value={formData?.age}
              onChange={handleChange}
              //   onBlur={handleBlur}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Salary</label>
            <input
              name="salary"
              type="number"
              className="form-control"
              placeholder="$$"
              value={formData?.salary}
              onChange={handleChange}
              //   onBlur={handleBlur}
              required
            />
          </div>
          <div className="col-12 m-4">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <button className="btn btn-primary" onClick={showData}>
        Get Method
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data?.id}</td>
              <td>{data?.name}</td>
              <td>{data?.email}</td>
              <td>{data?.address?.street}</td>
              {/* <td>
                <button className='btn btn-primary m-1' onClick={()=>handleEdit(index)}>Edit</button>
                <button className='btn btn-primary m-1' onClick={()=>remove(index)}>Remove</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
