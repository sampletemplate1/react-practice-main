import React from 'react'

export default function Component4(props) {
    const person=props.element;
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
                {person.map((item,index)=>(
                    <tr key={item.index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
