import React, { useState, useEffect } from 'react'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { AiOutlineVideoCameraAdd, AiOutlineCloseCircle } from 'react-icons/ai'
import { BiUpload } from 'react-icons/bi'
import { HiSortDescending } from 'react-icons/hi'
import Navbar from './../Components/Navbar'
import Post from './../Components/Post'
import { Link } from 'react-router-dom'
import Suggestion from '../Components/Suggestion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreatePostPopup } from './Home'


function Explore(props) {
  const [showPostForm, setShowPostForm] = useState(false);
  const getPosts = () => {

  }
  useEffect(() => {
    getPosts()
  }, [])
  const user = { userid: "123", _id: "Fsafdfd", profile: "https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg", fullname: "Mugisha Precieux", username: "precieux23" }
  return (
    <div className='bg-[#ddd] flex flex-col items-center justify-start w-screen h-screen'>
      <Navbar />
      <div className='main-home h-full w-full flex items-start justify-center flex-row px-0 pt-16 sm:px-4 md:px-10 xl:px-16'>
        {showPostForm ? <CreatePostPopup setShowPostForm={setShowPostForm} /> : null}
        <div className="home-sections mx-2 mt-3 items-center justify-center flex-col w-3/12  rounded-lg py-4 h-2/3 hidden sm:flex md:flex xl:flex">
          <div className='w-10/12 flex py-3 flex-col bg-white rounded-lg items-center justify-center'>
            <img className='relative -top-16 rounded-full border-2 border-white w-32 h-32 object-cover' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
            <Link to={`/account/${user.userid}`} className='relative text-black text-center text-2xl font-bold'>John Doe</Link>
            <p className='text-black text-center text-sm w-8/12 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <div className='flex items-center justify-around w-full'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-black text-center text-2xl font-bold'>Followers</h1>
                <h1 className='text-black text-center text-xl font-bold'>123</h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-black text-center text-2xl font-bold'>Following</h1>
                <h1 className='text-black text-center text-xl font-bold'>123</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-sections mx-2 mt-3 items-center justify-start flex-col w-4/12  rounded-lg py-4 sm:flex md:flex xl:flex" style={{ 'height': '98%' }}>
          <div className="new-post-sections items-center justify-around flex w-11/12 mb-4 bg-white rounded-lg my-2 h-24 sm:flex md:flex xl:flex p-3">
            <img src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" className='rounded-full h-16 w-16' alt="" />
            <div className="flex items-center w-3/5 flex-col justify-center">
              <div className='h-2/5 flex flex-col xl:flex-row items-center justify-center w-full'>
                <button onClick={() => setShowPostForm(true)} className='flex items-center w-full xl:w-1/2 whitespace-nowrap  justify-center bg-pink-600 text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Add video</button>
                <button className='flex items-center justify-center bg-pink-600 w-full xl:w-1/2 whitespace-nowrap text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Create video</button>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-around'>
            <h1 className='text-xl my-3'>Recent reels</h1>
            <button className='flex items-center justify-center text-white bg-pink-600 rounded py-1 px-4'><HiSortDescending />Sort</button>
          </div>
          <div className="post-sections pt-3 bg-white overflow-x-scroll items-center justify-start flex-col w-11/12 rounded-lg my-2 h-4/5 sm:flex md:flex xl:flex">
            <Post posterData={{ _id: (Math.floor(Math.random() * 999999)), username: "precieux23", profile: 'https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg' }} post={{ caption: "Don't pour the water", videoUrl: 'https://v16-webapp.tiktok.com/8f6fbb374f69f9458efd03807d465a47/62ceb30d/video/tos/useast2a/tos-useast2a-pve-0068/6884339267e74020b35429e69435b78e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1354&bt=677&btag=80000&cs=0&ds=3&ft=eXd.6HnlMyq8ZQPNXwe2NuY0yl7Gb&mime_type=video_mp4&qs=0&rc=Mzw7aTczZjY1NTZmOTxkOUBpMzo2ajc6ZjRnZTMzNzczM0BfXi8wXl9hNV4xMDYxMV4uYSNqYmBrcjRfcjBgLS1kMTZzcw%3D%3D&l=20220713055556010190208043240ABE6B' }} />
            <Post posterData={{ _id: (Math.floor(Math.random() * 999999)), username: "precieux23", profile: 'https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg' }} post={{ caption: "Don't pour the water", videoUrl: 'https://v16-webapp.tiktok.com/8f6fbb374f69f9458efd03807d465a47/62ceb30d/video/tos/useast2a/tos-useast2a-pve-0068/6884339267e74020b35429e69435b78e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1354&bt=677&btag=80000&cs=0&ds=3&ft=eXd.6HnlMyq8ZQPNXwe2NuY0yl7Gb&mime_type=video_mp4&qs=0&rc=Mzw7aTczZjY1NTZmOTxkOUBpMzo2ajc6ZjRnZTMzNzczM0BfXi8wXl9hNV4xMDYxMV4uYSNqYmBrcjRfcjBgLS1kMTZzcw%3D%3D&l=20220713055556010190208043240ABE6B' }} />
          </div>
        </div>
        <div className="home-sections mx-2 mt-10 items-start justify-start pt-3 flex-col w-3/12 bg-white rounded-lg py-4 h-2/3 hidden sm:flex md:flex xl:flex">
          <div className="flex flex-col items-center px-4 w-full justify-start">
            <p className='w-full text-center  text-2xl mb-2 font-semibold text-gray whitespace-nowrap'>Trending</p>
            <p className='w-full text-center my-1'>#movies</p>
            <p className='w-full text-center my-1'>#movies</p>
            <p className='w-full text-center my-1'>#movies</p>
            <p className='w-full text-center my-1'>#movies</p>
            <p className='w-full text-center my-1'>#movies</p>
          </div>
          <div className="flex flex-col items-center w-full justify-start">
            <p className='text-2xl mb-2 font-semibold text-gray whitespace-nowrap'>Suggested users</p>
            <Suggestion user={user} />
            <Suggestion user={user} />
            <Suggestion user={user} />
            <Suggestion user={user} />
          </div>
        </div>
      </div>
    </div>)
}

export default Explore

