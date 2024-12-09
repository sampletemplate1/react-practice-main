import React, { createContext } from 'react'
import Comp2 from './Comp2';
const Bio = createContext();
export default function Comp1() {
    const person=[
        {name:"Sita",email:"sita@mail",state:"Goa"},
        {name:"Gita",email:"gita23@mail",state:"Punjab"},
        {name:"Mita",email:"mita11@mail",state:"Haryana"},
        {name:"Hita",email:"hita90@mail",state:"Himachal"}
    ];
  return (
    <>
        <Bio.Provider value={person}>
            <Comp2/>
        </Bio.Provider>
    </>
  )
}
export {Bio};