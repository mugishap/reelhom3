import React from 'react'
import { Link } from 'react-router-dom'

function Suggestion(props) {
    return (
        <div className='flex my-2 items-center justify-center'>
            <div className="image flex items-center justify-center w-12 h-12">
                <img class='w-full h-full rounded-full object-cover' src={props.user.profile} alt="" />
            </div>
            <div className='ml-3 flex items-center justify-start h-full flex-col'>
                <p className='text-lg font-semibold text-gray whitespace-nowrap'>{props.user.fullname}</p>
                <Link to={`account/${props.user._id}`}><p className='text-,d font-light whitespace-nowrap'>@{props.user.username}</p></Link>
            </div>
            <div className="ml-3 flex items-center justify-center">
                <Link to={`account/${props.user._id}`}><button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full'>View</button></Link>
            </div>
        </div>
    )
}

export default Suggestion
