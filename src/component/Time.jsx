import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Time() {
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>{setTime(new Date())},1000);
    })
  return (
    <div>{time.toLocaleString()}</div>
  )
}
