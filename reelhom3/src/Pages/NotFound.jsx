import React from 'react'

// function NotFound() {
//   return (
// <div>
//     {/*Dynamic styled function  */}
// </div>  )
// }

const NotFound = (props) => {
    return (
        <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold text-center'>404</h1>
            <h2 className='text-2xl font-bold text-center'>Page Not Found</h2>
        </div>
        </div>
    )
}

export default NotFound
