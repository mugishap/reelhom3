import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import { RiLockPasswordFill } from 'react-icons/ri'
import { setCookie } from '../Context/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import { useUsers } from '../Context/UserContext';

function Login(props) {
  const { loginUser } = useUsers()
  const [loader,setLoader] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()
      setLoader(true)
      const data = await loginUser({ email: formData.email, password: formData.password })
      if (data.message !== 'Can continue') {
        setLoader(false)
        toast.error(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      setCookie('token', data.token);
      setCookie('userID', data.user._id);
      setLoader(false)
      window.location.replace('/');
    } catch (error) {
      return error
    }
  }

  const handleChange = (prop) => (event) => {
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
        <p className='text-2xl my-3 font-semibold'>Welcome Back!</p>
        <form className='flex items-center flex-col justify-center w-full my-4 p-8' onSubmit={handleSubmitForm}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='w-full'>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField className='w-11/12' id="input-with-sx" onChange={handleChange('email')} label="Email" variant="standard" />
          </Box>
          <div className='flex items-center justify-center w-full'>
            <RiLockPasswordFill size={25} color='grey' classsName=' my-1/2 mr-1' />
            <FormControl sx={{ m: 1, width: '100%' }} className='w-full' variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
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
          {loader? <img src={require('./../Utils/Images/loader.gif')} width={30}/> : <button className='text-white rounded-sm px-4 cursor-pointer py-1 bg-[#d52777]' type='submit'>
            Submit
          </button>}
        </form>
        <p className='my-3 text-lg'>
          Don't have an account? <Link to='/signup' className='hover:text-pink-600'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
