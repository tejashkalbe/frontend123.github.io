import React, { useState } from 'react'
import axios from 'axios'


const Forms = ({fetchstate,setFetchstate}) => {
  const [data,setData]=useState({
    timestamp:"",
    variables:Array(10).fill(0)
  })

  const handlechange = (e,index) => {
    const {value} = e.target;
setData((lastData)=>({
  ...lastData,
  variables: lastData.variables.map((v,i)=>
    i === index ? parseFloat(value) : v)
}))}

const handleSubmit = async(e) => {
  e.preventDefault();
  console.log(data)
  try{
    await axios.post("http://localhost:3000/api/timestampdata",data)
    setFetchstate((prev)=>{prev+1})
  }
  catch(err){
    console.log(err)
  }
}
  return (
    <>
        <div className='formData'>
          <form onSubmit={(e=>{handleSubmit(e)})}>
            <label htmlFor="timestamp">TimeStamp:</label>
            <input type="datetime-local" name="timestamp" id="timestamp" value={data.timestamp} onChange={(e)=>setData({...data,timestamp:e.target.value})} />

<br />
{
  data.variables.map((variable,index)=>(
    <div key={index}>
      <label>
        Variables {index+1}:
             <input type="number" value={variable} onChange={(e)=>handlechange(e,index)} name="timestamp" id="timestamp" />
      </label>
    </div>
  ))
}
<button type='submit'>Send</button>

          </form>
        </div>

    
    
    </>
  )
}

export default Forms