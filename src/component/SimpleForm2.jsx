import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SimpleForm2() {
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: ""
  });
  const [postData, setPostData]=useState([]);
  const [fetchedData,setFetchedData]=useState([]);
  const handleChange = (e) => {
    const{name,value}=e.target;
    setData({...data,[name]:value})
  };

  const showData = () => {
    getDataHandler();
  };
  const getDataHandler = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setFetchedData(resp?.data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postDataHandler();
  };
  const postDataHandler = () => {
    let body = {
        title: data.title,
        body:data.body,
        userId:data.userId
      };
  axios.post("https://jsonplaceholder.typicode.com/posts", body)
    .then((resp) => {
      console.log("resp", resp);
      if (resp?.request?.status === 201) {
        alert("data added");
        setPostData([...postData,body]);
        setData({
            title:"",
            body:'',
            userId:''
        })
      }
    });
};

useEffect(()=>{
    setPostData(fetchedData);
},[fetchedData])
  return <div>
     <div className="container p-5 d-flex justify-content-center">
        <form className="row g-3 card p-4" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label className="form-label lab">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="enter the title"
              value={data?.title}
              onChange={handleChange}
              //   onBlur={handleBlur}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label lab">Body</label>
            <input
              name="body"
              type="text"
              className="form-control"
              placeholder="Your content here"
              value={data?.body}
              onChange={handleChange}
              //   onBlur={handleBlur}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label lab">User Id</label>
            <input
              name="userId"
              type="number"
              className="form-control"
              placeholder="Your ID"
              value={data?.userId}
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
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {postData.map((item,index) => (
            <tr key={index}>
              <td>{item?.title}</td>
              <td>{item?.body}</td>
              <td>{item?.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>;
}
