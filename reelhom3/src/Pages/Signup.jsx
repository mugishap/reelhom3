import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

function Signup(props) {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  const handleSubmitForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className='bg-[#eee] flex items-center justify-center w-screen h-screen'>
      <img className='w-1/2 h-2/3' src='https://res.cloudinary.com/precieux/image/upload/v1657718480/photocorner/media_nemeou.svg' alt="" />
      <div className="form w-1/2 flex items-center justify-center ">
        <h1 className='font-semibold text-lg text-black'>Welcome Back!</h1>
        <form onSubmit={handleSubmitForm}>
        <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e)=>{setFormData({...formData,email:e.target.value})}} />
        </form>
      </div>
    </div>)
}

export default Signup
