import React, { useState } from 'react'

export default function Firstform() {
    const [name , setName]= useState('')
    console.log('name', name)
    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <>
    <div>fisrtForm</div>
    <form >
        <label></label>
        <input type='text'
        value={name}
        placeholder='Enter your name'
         onChange={(e)=>setName(e.target.value)}></input>
    </form>
    <button onClick={handleSubmit}>BUTTON</button>
    {name}
    </>
  )
}
