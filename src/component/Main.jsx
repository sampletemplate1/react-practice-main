import React from 'react'
import "./main.css";
import Signup from './Signup';
import {Routes, Route} from 'react-router-dom';
import ToDo from './ToDo';
import Counter from './Counter';
import Home from './Home';
import Component1 from './props-component/Component1';
import Comp1 from './use-context-component/Comp1';
import TodoList from './TodoList';
import CounterReducer from './CounterReducer';
import NewReducer from './NewReducer';
import SecondReducer from './SecondReducer';
import UseReff from './UseReff';
import Firstform from './React_form/Firstform';
import Form from './React_form/Form';
import FormikForm from './FormikForm';
import GetMethod from './GetMethod';
import PostMethod from './PostMethod';
import SimpleForm from './SimpleForm';
import SimpleForm2 from './SimpleForm2';
import SimpleFormWithoutVad from './SimpleFormWithoutVad.jsx';
import CHome from './crud/CHome';
import Create from './crud/Create';
import Show from './crud/Show';
import Edit from './crud/Edit';
import Add from'./crudValidation/Add';
import VHome from './crudValidation/VHome';
import Update from './crudValidation/Update';
import WHome from'./crud-simple-vad/WHome';
import New from './crud-simple-vad/New';
import ReduxCounter from './Redux/ReduxCounter';
import NewCal from './calculator/NewCal';
export default function Main() {
  return (
    <div className='main col-9'>
          <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<ToDo/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/props component' element={<Component1/>}/>
        <Route path='/useContext' element={<Comp1/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
        <Route path='/counterreducer' element={<CounterReducer/>}/>
        <Route path='/newreducer' element={<NewReducer/>}/>
        <Route path='/secondreducer' element={<SecondReducer/>}/>
        <Route path='/use-reff' element={<UseReff/>}/>
        <Route path='/first-form' element={<Firstform />}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/formikform' element={<FormikForm/>}/>
        <Route path='/get-method' element={<GetMethod/>}/>
        <Route path='/post-method' element={<PostMethod/>}/>
        <Route path='/simple-form' element={<SimpleForm/>}/>
        <Route path='/simple-form2' element={<SimpleForm2/>}/>
        <Route path='/simpleformwithoutvad' element={<SimpleFormWithoutVad/>}/>
        <Route path='/chome' element={<CHome/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/show/:id' element={<Show/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/vhome' element={<VHome/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/whome' element={<WHome/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/counts' element={<Counter/>}></Route>
        <Route path='/reduxcounter' element={<ReduxCounter/>}></Route>
        <Route path='/calc' element={<NewCal/>}></Route>
    </Routes>
    </div>
  )
}
