import React, { useContext } from 'react';
import { Bio } from './Comp1';


export default function Comp4() {
    const newData = useContext(Bio)
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>State</th>
                </tr>
            </thead>
            <tbody>
                {newData?.map((item,index)=>(
                    <tr key={item?.index}>
                        <td>{index+1}</td>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
