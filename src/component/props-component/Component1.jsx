import React from 'react'
import Component2 from './Component2'

export default function Component1() {
    const person=[
        {name:"Sita",email:"sita@mail",state:"Goa"},
        {name:"Gita",email:"gita23@mail",state:"Punjab"},
        {name:"Mita",email:"mita11@mail",state:"Haryana"},
        {name:"Hita",email:"hita90@mail",state:"Himachal"}
    ];
  return (
    <div>
    <Component2 element={person}/>
    </div>
  )
}
