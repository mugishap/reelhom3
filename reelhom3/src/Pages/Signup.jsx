import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { useUsers } from './../Context/UserContext'
import { ToastContainer,toast } from 'react-toastify';


function Signup(props) {
  const { newUser } = useUsers()
console.log(useUsers());
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: '',
    password: '',
    showPassword: false
  })

  const handleSubmitForm = async () => {
    const data = await newUser({ fullname: formData.fullname, username: formData.username, email: formData.email, password: formData.password })
    if (data.message !== 'Account created') {
      toast.error(data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleChange = (prop) => (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };


  return (
    <div className='bg-[#eee] flex items-center justify-around w-screen h-screen'>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <img className='w-3/12 h-2/3' src='https://res.cloudinary.com/precieux/image/upload/v1657718480/photocorner/media_nemeou.svg' alt="" />
      <div className="ml-2 form flex flex-col w-1/4 h-5/12 rounded-lg items-center justify-start bg-white">
        <span className='my-2 pt-3 text-black flex items-center justify-center text-4xl font-semibold'>Reel<p className='text-pink-600'>home</p></span>
        <p className='text-2xl my-3 font-semibold'>Create new account</p>
        <form className='flex items-center flex-col justify-center w-full my-4 p-8' onSubmit={handleSubmitForm}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='w-full my-2'>
            <TextField className='w-full' id="input-with-sx" onChange={handleChange('fullname')} label="Full Name" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='w-full my-2'>
            <TextField className='w-full' id="input-with-sx" onChange={handleChange('username')} label="Username" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='w-full my-2'>
            <TextField className='w-full' id="input-with-sx" onChange={handleChange('email')} label="Email" variant="standard" />
          </Box>
          <div className='flex items-center justify-center w-full'>
            <FormControl sx={{ m: 1 }} className='w-full' variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                className='w-full'
                id="standard-adornment-password"
                type={formData.showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <button className='text-white rounded-sm px-4 cursor-pointer py-1 bg-[#d52777]' type='submit'>
            Submit
          </button>
        </form>
        <p className='my-3 text-lg'>
          Already have an account? <Link to='/login' className='hover:text-pink-600'>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
