import React from 'react'
import Navbar from '../Components/Navbar'

function Account(props) {
  const user = { userid: "123", _id: "Fsafdfd", profile: "https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg", fullname: "Mugisha Precieux", username: "precieux23" }

  return (
    <div className='bg-[#eee] w-screen h-screen flex flex-col justify-center items-center'>
      <Navbar />
      <div className='w-full flex items-center justify-around'>
        <div className='w-1/5 h-1/2 rounded bg-white flex items-center justify-center'>

        </div>
        <div className='w-3/5'></div>
      </div>
    </div>
  )
}

export default Account
