import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
export default function Sidebar() {
  return (
    <>
    <div className='side col-3'>
        <ul>
          <Link to="/todo">ToDo</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/props component">Props Component</Link>
          <Link to="/useContext">UseContext</Link>
          <Link to='/todolist'>Todo List</Link>
          <Link to='/counterreducer'>Counter Reducer</Link>
          <Link to='/newreducer'>New Reducer Todo</Link>
          <Link to='/secondreducer'>Second Reducer</Link>
          <Link to='/use-reff'>UserReff</Link>
          <Link to='/first-form'>Form</Link>
          <Link to='/form'>Form Question</Link>
          <Link to='/formikform'>Formik Form </Link>
          <Link to='/get-method'>Get Method</Link>
          <Link to='/post-method'>Post Method</Link>
          <Link to='/simple-form'>Form without Formik</Link>
          <Link to='/simple-form2'>Form without Formik 2</Link>
          <Link to='/simpleformwithoutvad'>Form without Vadilation</Link>
          <Link to='/chome'>Crud</Link>
          <Link to='/vhome'>Crud with Validation</Link>
          <Link to='/whome'>Crud with SimpleValidation</Link>
          <Link to='reduxcounter'>Redux Counter</Link>
          <Link to='calc'>Calculator</Link>
        </ul>
    </div>
    </>
  )
}
