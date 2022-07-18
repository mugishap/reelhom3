import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { getUserById } from '../Context/AuthContext'
import { usePosts } from './../Context/PostContext'
import { useUsers } from './../Context/UserContext'
import { AiOutlineSend, AiOutlineCloseCircle } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import { TextField } from '@mui/material'


function Account(props) {
  const [user, setUser] = useState()
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [posts, setPosts] = useState()

  const { getPostsByUser } = usePosts()
  const params = useParams()
  const getSearchedUser = async () => {
    const data = await getUserById(params.userID)
    setUser(data)
  }
  const getUserPosts = async () => {
    const data = await getPostsByUser(params.userID)
    if (data.message === 'No posts found') {
      document.querySelector('.posts').innerHTML = `<h1>${data.message}</h1>`
    }
    else {
      setPosts(data.posts)
    }
  }
  useEffect(() => {
    getSearchedUser()
    getUserPosts()
  }, [])
  return (
    <div className='bg-[#eee] w-screen h-screen flex flex-col justify-start items-center'>
      <Navbar user={props.user} />
      {showUpdateForm ? <UpdateFormPopUp user={props.user} setShowUpdateForm={setShowUpdateForm} /> : null}

      {
        user ?
          <div className='w-full flex h-full items-center justify-around'>
            <div className='w-1/5 h-1/2 rounded-lg bg-white flex-col flex items-center justify-center'>
              <div className='w-full h-1/3 flex cover-profile'>
                <img className='w-full h-full p-0 m-0 object-cover' src={user.cover} alt="" />
              </div>
              <div className='w-full h-2/3 flex profile-picture flex-col items-center justify-start'>
                <img className='relative -top-12 border-white border-4 rounded-full h-24 w-24' src={user.profile} alt="" />
                <div className='relative flex items-center flex-col justify-start -top-12'>
                  <p>Mugisha Precieux</p>
                  <p>@mprecieux</p>
                  <div className='flex items-start my-3 justify-between w-full'>
                    <div className='flex flex-col items-center w-1/3 justify-center'>
                      <h1 className='text-black text-center text-2xl font-bold'>Followers</h1>
                      <h1 className='text-black text-center text-xl font-bold'>{user.followers}</h1>
                    </div>
                    <div className='flex flex-col items-center w-1/3 justify-center'>
                      <h1 className='text-black text-center text-2xl font-bold'>Following</h1>
                      <h1 className='text-black text-center text-xl font-bold'>{user.following}</h1>
                    </div>
                  </div>
                  <p className='w-4/5 my-2 text-ellipsis break-words'>{user.bio}</p>
                  {props.user._id === params.userID ?
                    <button onClick={() => { setShowUpdateForm(true) }} className='px-3 py-1 rounded bg-pink-600 text-white'>Update account</button>
                    :
                    <button onClick={() => { setShowUpdateForm(true) }} className='px-3 py-1 rounded bg-pink-600 text-white'>Follow</button>
                  }
                </div>
              </div>
            </div>
            <div className='posts w-3/5 h-2/3 rounded-lg p-3 flex flex-col items-center justify-start bg-white posts'>
              <h1>Posts</h1>
              <div className="grid grid-cols-3 w-full h-full overflow-y-scroll">
                {posts ?
                  posts.map((post) => {
                    return (
                      <div className="flex items-center rounded-lg m-2 justify-center">
                        <video className='w-full h-full rounded-lg' src={post.video_url} autoPlay={false} controls={false} playsInline={false}></video>
                      </div>)
                  })
                  : (
                    <img src={require('./../Utils/Images/loader.gif')} alt="" />
                  )}
              </div>
            </div>
          </div>
          :
          <img className='m-auto mt-24' src={require('./../Utils/Images/loader.gif')} alt="" />
      }
    </div>
  )
}

export default Account


export function UpdateFormPopUp({ user, setShowUpdateForm }) {

  const { updateUser } = useUsers()

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    cover: "",
    profile: ""
  })
  const [loader, setLoader] = useState(false)

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoader(true)
    const data = await updateUser({ fullname: formData.fullname, username: formData.username, email: formData.email })
    setLoader(true)

    if (data.message !== "User updated successfully") {
      toast.error(data.error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoader(false)
      return
    }
    toast(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoader(false)
  }

  return (
    <div className={`flex z-[3] items-center justify-center absolute top-0 left-0 w-screen h-screen bg-black/70`}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='bg-transparent h-full w-full absolute top-0 left-0 z-[5]' onClick={() => setShowUpdateForm(false)}></div>
      <div className='bg-white z-[10] w-1/3 h-4/5 rounded-lg text-black flex items-center justify-center'>
        <div className='w-full h-full flex  justify-start pt-12 flex-col items-center'>
          <span className='relative top-0  right-0 text-white float-right mb-16 cursor-pointer' onClick={(e) => { setShowUpdateForm(false) }}><AiOutlineCloseCircle color='black' size={30} /></span>
          {/* <h2 className='text-xl font-bold'>Update User account</h2> */}
          <form onSubmit={handleSubmitForm} className='flex flex-col items-center h-full justify-center w-full'>
            <div className='w-full h-1/3 flex items-center flex-col justify-center'>
              <div className='w-full h-full'>
                <img className='w-full h-full' src={user.cover} alt="" />
              </div>
              <img className='rounded-full -top-16 relative w-32' src={user.profile} alt="" />
            </div>
            <TextField required={true} className='mt-2 w-4/5' style={{marginTop:'10px'}} value={user.fullname} type='text' onChange={(e) => { setFormData({ ...formData, fullname: e.target.value }) }} id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField required={true} className='mt-2 w-4/5' style={{marginTop:'10px'}} value={user.username} type='text' onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }} id="outlined-basic" label="Username" variant="outlined" />
            <TextField required={true} className='mt-2 w-4/5' style={{marginTop:'10px'}} value={user.email} type='text' onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} id="outlined-basic" label="Email" variant="outlined" />
            {
              loader ?
                <img className='mt-3' width={40} src={require('./../Utils/Images/loader.gif')} alt="" />
                :
                <button className='rounded-lg px-6 text-lg mt-8 flex items-center justify-center py-2 text-white bg-pink-600' type="submit"><AiOutlineSend />Submit</button>
            }
          </form>
        </div>
      </div>
    </div>
  )
}
