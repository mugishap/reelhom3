import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineWbSunny, MdDarkMode, MdOutlineVideoLibrary } from 'react-icons/md'
import { CreatePostPopup } from '../Pages/Home';
import { changeMode } from '../Utils/themes';
import { Link } from 'react-router-dom'
import { getUserById } from '../Context/AuthContext';
import { getCookie } from '../Context/RequireAuth';
import { checkForAccess } from '../Utils/checkForAccess';

function Navbar(props) {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({})
  const [loader, setLoader] = useState(true)
  const [showPostForm, setShowPostForm] = useState(false);
  const searchUser = (e) => {
    e.preventDefault()
    // setSearchResultsState(true)
  }
  useEffect(() => {
    if (props.user) return setUser(props.user)
}, [])

  return (
    <div className='flex items-center justify-around absolute bg-white w-full h-16 px-3'>
      {showPostForm ? <CreatePostPopup setShowPostForm={setShowPostForm} /> : null}
      <Link to={'/'}><span className='text-black flex items-center justify-center text-2xl font-semibold'>Reel<p className='text-pink-600'>home</p></span></Link>
      <div className='flex items-center justify-center w-1/5'>
        <form onSubmit={searchUser} className='w-full flex items-center justify-center h-full rounded-md p-1 bg-slate-100  border-2 border-gray-300'>
          <input type="text" placeholder='Search....' className='bg-slate-100 w-full' onChange={(e) => { setSearch(e.target.value); }} />
          <button type='submit'><BsSearch color='gray' /></button>
        </form>
        {/* <div className={`${showDiv ? "flex" : "hidden"}bg-white p-1 relative h-48 w-full`}></div> */}
      </div>
      <div className='h-full flex flex-row items-center justify-center w-1/5'>
        <button onClick={() => setShowPostForm(true)} className='flex items-center w-full xl:w-1/2 whitespace-nowrap  justify-center bg-pink-600 text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Add video</button>
        <button className='flex items-center justify-center bg-pink-600 w-full xl:w-1/2 whitespace-nowrap text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Create video</button>
      </div>
      {loader ? <img src={require('./../Utils/Images/loader.gif')} width={40} /> : <div className="items-center justify-around flex sm:flex md:flex xl:flex p-3">
        <Link to={`/account/${user._id}`}>
          <img src={user.profile} className='rounded-full h-12 w-12' alt="" />
        </Link>
      </div>}
      {
        props.mode === 'dark' ? <MdOutlineWbSunny onClick={changeMode} size={30} color='#db2777' /> : <MdDarkMode size={30} color='#db2777' onClick={changeMode} />
      }
    </div>
  )
}

export default Navbar
