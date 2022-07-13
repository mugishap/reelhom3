import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md'

function Navbar(props) {
  const [search, setSearch] = useState('')
  const [showDiv, setShowDiv] = useState(false)
  const searchUser = (e) => {
    e.preventDefault()
    // setSearchResultsState(true)
  }
  return (
    <div className='flex items-center justify-around absolute bg-white w-full h-16 px-3'>
      <span className='text-black flex items-center justify-center text-2xl font-semibold'>Reel<p className='text-pink-600'>home</p></span>
      <div className='flex items-center justify-center w-1/5'>
        <form onSubmit={searchUser} className='w-full flex items-center justify-center h-full rounded-md p-1 bg-slate-100  border-2 border-gray-300'>
          <input type="text" placeholder='Search....' className='bg-slate-100 w-full' onChange={(e) => { setSearch(e.target.value); }} />
          <button type='submit'><BsSearch color='gray' /></button>
        </form>
        {/* <div className={`${showDiv ? "flex" : "hidden"}bg-white p-1 relative h-48 w-full`}></div> */}
      </div>
      {
        props.mode === 'dark' ? <MdOutlineWbSunny /> : <MdDarkMode />
      }
    </div>
  )
}

export default Navbar
