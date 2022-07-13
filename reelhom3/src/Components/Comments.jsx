import React from 'react'

function Comments(props) {
  return (
    <div className='p-1 my-2 rounded bg-gray-400 text-black flex items-center justify-center'>
      <img src={props.user.profile} alt={props.user.user} className='w-12 h-12 rounded-full object-cover' />
      <p className='ml-2 text-black w-4/5'>{props.comment.comment}</p>
    </div>
  )
}

export default Comments
