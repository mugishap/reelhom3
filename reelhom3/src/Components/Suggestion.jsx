import React from 'react'
import { Link } from 'react-router-dom'

function Suggestion(props) {
    return (
        <div className='flex my-2 items-start  justify-between w-full px-4'>
            <div className='flex'>
                <div className="image flex items-center justify-center w-12 h-12">
                    <img class='w-full h-full rounded-full object-cover' src={props.user.profile} alt="" />
                </div>
                <div className='ml-3 flex items-start justify-start h-full flex-col'>
                    <p className='text-lg font-semibold text-gray whitespace-nowrap'>{props.user.fullname}</p>
                    <Link to={`account/${props.user._id}`}><p className='text-,d font-light whitespace-nowrap'>@{props.user.username}</p></Link>
                </div>
            </div>
            <div className="ml-3 flex items-center justify-center float-right relative right-0">
                <Link to={`account/${props.user._id}`}><button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full'>View</button></Link>
            </div>
        </div>
    )
}

export default Suggestion
