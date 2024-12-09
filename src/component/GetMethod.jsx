import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function GetMethod() {

    const [data,setData]=useState([]);
    console.log('data', data)
    // const api= axios.create({
    //     baseURL:'https://jsonplaceholder.typicode.com/users'
    // });
    // const getDataHandler=()=>{
    //     api.get("/").then((resp)=>setData(resp?.data));
    // }
    // useEffect(()=>{
    //     getDataHandler();
    // },[])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((resp) =>{
            setData(resp?.data);
        })
    },[])


  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((data)=>(
                    <>
                   
                    <tr>
                    <td>{data?.id}</td>
                        <td>{data?.name}</td>
                        <td>{data?.email}</td>
                        <td>{data?.address?.street}</td>
                    </tr>
                    </>
                ))}
            </tbody>
        </table>
    </div>
  )
}
