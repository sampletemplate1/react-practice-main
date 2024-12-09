import React from "react";
export default function Signup(){
    // function accountCreated(){
    //     alert ("Account Created Successfully");
    // }
    return (
        <>
        <div className="container p-5">
        <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Name</label>
    <input type="email" className="form-control"  placeholder="enter your name"/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="password"/>
  </div>
  <div className="col-12">
    <label  className="form-label">Address</label>
    <textarea className="form-control" placeholder="Hno. #12, Street Number"></textarea>
  </div>
  <div className="col-md-6">
    <label className="form-label">City</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="col-md-4">
    <label className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Punjab</option>
      <option>Himachal Pradesh</option>
      <option>Rajasthan</option>
      <option>Gujarat</option>
      <option>Andhra Pradesh</option>
    </select>
  </div>
  <div className="col-md-2">
    <label className="form-label">Pin Code</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">
        Remember me
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
        </div>
        </>
    );
}
