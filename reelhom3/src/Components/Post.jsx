import React from 'react'
import {Link} from 'react-router-dom'

function Post(props) {
  return (
    <div className='mb-3 w-10/12 rounded-lg border-gray-700 border-1 h-fit flex justify-center flex-col items-start px-4'>
      <Link className='w-full' to={`/account/${props.posterData._id}`}>
        <div className='w-full flex items-center justify-start'>
          <img className='rounded-full h-12 w-12' src={props.posterData.profile} alt={props.posterData.username} />
          <p className='pl-1'>{props.posterData.username}</p>
        </div>
      </Link>
      <video className='w-full h-[] rounded-lg mt-3' playsInline={true} controls={true} src={props.post.videoUrl} />
      <p className='mt-2'>{props.post.caption}</p>
    </div>
  )
}

export default Post
