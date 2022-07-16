import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { getUserById } from '../Context/AuthContext'

function Account(props) {
  const [searchedUser, setSearchedUser] = useState()
  const [user, setUser] = useState()
  const userID = useParams().userID

  const getUser = async () => {
    const data = await getUserById(userID)
    if (!data) return window.location.replace('/login')
    setUser(data)
  }
  // const user = { userid: "123", _id: "Fsafdfd", profile: "https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg", fullname: "Mugisha Precieux", username: "precieux23" }

  return (
    <div className='bg-[#eee] w-screen h-screen flex flex-col justify-start items-center'>
      <Navbar />
      <div className='w-full flex h-full items-center justify-around'>
        <div className='w-1/5 h-fit rounded-lg bg-white flex-col flex items-center justify-center'>
          <div className='w-full h-1/3 flex cover-profile'>
            <img className='w-full h-full p-0 m-0 object-cover' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
          </div>
          <div className='w-full h-2/3 flex profile-picture flex-col items-center justify-start'>
            <img className='relative -top-12 border-white border-4 rounded-full h-24 w-24' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
            <div className='relative flex items-center flex-col justify-start -top-12'>
              <p>Mugisha Precieux</p>
              <p>@mprecieux</p>
              <div className='flex items-center my-3 justify-around w-full'>
                <div className='flex flex-col items-center justify-center'>
                  <h1 className='text-black text-center text-2xl font-bold'>Followers</h1>
                  <h1 className='text-black text-center text-xl font-bold'>123</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h1 className='text-black text-center text-2xl font-bold'>Following</h1>
                  <h1 className='text-black text-center text-xl font-bold'>123</h1>
                </div>
              </div>
              <p className='w-4/5 text-ellipsis break-words'>Lorem ipsum dolor sit amet consectetur s quas iure eius praesentium non at maiores! Nihil.</p>
            </div>
          </div>
        </div>
        <div className='w-3/5 h-2/3 rounded-lg p-3 flex flex-col items-center justify-start bg-white posts'>
          <h1>Posts</h1>
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center">

              <video src="" autoPlay={false} controls={false} playsInline={false}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
