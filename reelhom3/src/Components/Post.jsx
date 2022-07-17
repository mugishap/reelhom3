import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserById } from './../Context/AuthContext'

function Post(props) {
  const [poster, setPoster] = useState({})
  const getPoster = async () => {
    const data = await getUserById(props.post.user)
    setPoster(data)
  }
  useEffect(() => {
    getPoster(props.user)
  }, [])
  return (
    <div className='mb-8 w-10/12 rounded-lg border-gray-700 border-1 h-fit flex justify-center flex-col items-start px-4'>
      <Link className='w-full' to={`/account/${poster._id}`}>
        <div className='w-full flex items-center justify-start'>
          <img className='rounded-full h-12 w-12' src={poster.profile} alt={poster.username} />
          <p className='pl-1'>{poster.username}</p>
        </div>
      </Link>
      <video className='w-full  rounded-lg mt-3 h-[70vh] object-cover' playsInline={true} controls={true} src={props.post.video_url} />
      <p className='mt-2'>{props.post.caption}</p>
      <hr className='text-black w-full my-2'/>
    </div>
  )
}

export default Post
