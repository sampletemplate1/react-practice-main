import React, { useEffect, useState } from "react";
import "./todo.css";
export default function ToDo() {
  const list = [
    "Learn HTML",
    "Learn CSS",
    "Learn Javascript",
    "Practice CSS",
    "Learn Bootstrap",
    "Learn React",
    "Practice Bootstrap",
  ];

  const [data, setData] = useState([]);
  const [edited,setEdited]=useState({index:null,text:""});
  
  const getData = () => {
    setData(list);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteAll = () => {
    setData([]);
  };

  const singleRemove = (index) => {
    const newList = [...data];
    newList.splice(index, 1);
    setData(newList);
  };

  // const list2 = [
  //   "Play Games",
  //   "Watch a movie",
  //   "Make a project",
  //   "Watch Youtube video",
  //   "Practice Hook",
  //   "Sleep for 2 hours",
  //   "Exercise",
  //   "Make Food",
  // ];
  // const [index, setIndex] = useState(0);
  // const addNew = () => {
  //   if (index < list2.length) {
  //     const newItem = list2[index];
  //     setData([...data, newItem]);
  //     setIndex(index + 1);
  //   }
  // };
 const addTodo=()=>{
  if(edited.index!==null){//editing a row
    const update=[...data];
    if(edited.text.trim()==""){
      return;
    }
    else{
      update[edited.index]=edited.text;
    setData(update);
    setEdited({index:null,text:""});
    }
  }
  else{//adding a row
    if(edited.text.trim()==""){
      return;
    }
    setData([...data,edited.text]);
  }
  setEdited({index:null,text:""});
 };
  // const addTodo = () =>{
  //   if (newTodo.trim()===''){
  //     return ;
  //   }
  //   setData([...data,newTodo]);
  //   setNewTodo('');
  // };

  const handleInputChange=(e)=>{
    setEdited({...edited,text:e.target.value});
  }

  const handleEditClick=(index)=>{
    setEdited({index,text:data[index]});
  }
  const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
      addTodo();
    }
  }

  return (
    <>
      <div className="d-flex container justify-content-center">
        <input type="text" placeholder="Add new ToDo" value={edited.text} onChange={handleInputChange} onKeyPress={handleKeyPress} className="m-4 in"/>
        <button className="btn btn-primary m-4" onClick={addTodo}>
          {edited.index!==null?"Save":"Add"}
        </button>
      </div>
      <div className=" d-flex container justify-content-center ">
        <div className="cd m-3">
          <table className="table bg-light table-borderless table-hover">
            <thead className="table-dark">
              <tr>
                <th>S.No. </th>
                <th>Task</th>
                <th colSpan={2}>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{edited.index==index?(<input type="text" value={edited.text} onChange={handleInputChange}/>)
                    :
                    (item)
                    }</td>
                    <td>
                      {edited.index===index?(
                        <button className="btn btn-primary" onClick={addTodo}>
                          Save
                        </button>)
                        :
                        (<> <button
                        className="btn btn-primary"
                        onClick={() => singleRemove(index)}>
                        Remove
                      </button>
                      </>
                      )}
                    </td>
                   <td>
                   <button className="btn btn-primary" onClick={()=>handleEditClick(index)}>Edit</button>
                   </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" d-flex container justify-content-center">
        <div className="small d-flex justify-content-evenly">
          {/* <button className="btn btn-primary mb-3" onClick={addNew}>
            Add new items
          </button> */}
          <button className="btn btn-primary mb-3" onClick={deleteAll}>
            Delete all list
          </button>
        </div>
      </div>
    </>
  );
}


{/* <div className="container p-5 d-flex justify-content-center">
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
</div> */}