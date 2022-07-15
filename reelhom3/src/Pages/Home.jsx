import React, { useState, useEffect } from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineCloseCircle } from 'react-icons/ai'
import { BiUpload } from 'react-icons/bi'
import { HiSortDescending } from 'react-icons/hi'
import Navbar from './../Components/Navbar'
import Post from './../Components/Post'
import { Link } from 'react-router-dom'
import Suggestion from '../Components/Suggestion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from '../Components/Comments'
import { getUserById } from '../Context/AuthContext'
import { getCookie } from '../Context/RequireAuth'
import {}

function Home(props) {
    const [showPostForm, setShowPostForm] = useState(false);
    const [user, setUser] = useState({})
    const [posts,setPosts] = useState([])
    useEffect(async() => {
        const data = await getUserById(getCookie('userID'))
        setUser(data)
    }, [])
    const getPosts = async() => {
const data = await
    }
    useEffect(() => {
        getPosts()
    }, [])
    // const user = { userid: "123", _id: "Fsafdfd", profile: "https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg", fullname: "Mugisha Precieux", username: "precieux23" }
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

export default Home


export function CreatePostPopup({ setShowPostForm }) {

    const [formData, setFormData] = useState({
        videoStr: "",
        caption: ""
    })

    const handleSubmitForm = () => {

    }
    const previewFile = (base64VideoString) => {
        setFormData({ ...formData, videoStr: base64VideoString })
        document.getElementById("videoPreview").src = base64VideoString
    }

    const dragEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragover") {
            e.target.style.backgroundColor = "rgba(255,255,255,0.5)";
        } else {
            e.target.style.backgroundColor = "white";
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 10000000) {
            toast.error("Video must be less than 10MB", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            e.target.value = "";
        }
        else {
            const reader = new FileReader();
            reader.onloadend = (e) => {
                setFormData({ ...formData, videoStr: reader.result })
                console.log(reader.result)
                previewFile(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
    const dropEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.style.backgroundColor = "white";
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
            <div className='bg-transparent h-full w-full absolute top-0 left-0 z-[5]' onClick={() => setShowPostForm(false)}></div>
            <div className='bg-white z-[10] w-1/2 h-4/5 rounded-lg text-black flex items-center justify-center'>
                <div onDrag={dragEvent} onDragEnd={dropEvent} className='flex flex-col items-center rounded-lg justify-center w-1/2 h-full' style={{ 'border': '3px dashed grey' }}>
                    {(formData.videoStr || formData.caption) ?
                        (<div className='p-2 relative  z-[4] flex items-center justify-center flex-col rounded w-full h-full'>
                            <div className='mb-3 w-full flex items-center justify-start'>
                                <img className='rounded-full h-12 w-12' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
                                <p className='pl-1'>precieux23</p>
                            </div>
                            <video className='w-full h-[45vh] rounded-lg' autoPlay={true} controls src={formData.videoStr}></video>
                            <p className='mt-3 h-48 w-full whitespace-wrap'>{formData.caption}</p>
                        </div>)
                        :
                        <label htmlFor="video_to_post" className='relative z-[3] w-full flex-col h-full flex items-center justify-center'>
                            <AiOutlineVideoCameraAdd size={70} color={'#5c5858'} />
                            <p>Click to add a video here or drag it here</p>
                        </label>
                    }
                </div>
                <div className='w-1/2 h-full flex  justify-start pt-12 flex-col items-center'>
                    <span className='relative top-0  right-0 text-white float-right mb-24 cursor-pointer' onClick={(e) => { setShowPostForm(false) }}><AiOutlineCloseCircle color='black' size={30} /></span>
                    <h2 className='text-xl font-bold'>Create New Post</h2>
                    <form onSubmit={handleSubmitForm} className='flex flex-col items-center justify-center w-full'>
                        <textarea maxLength={500} className='rounded-lg border-2 w-4/5 border-black h-48 my-3 p-3' placeholder='Type something' type="text" onChange={(e) => { setFormData({ ...FormData, caption: e.target.value }) }}></textarea>
                        <label htmlFor="video_to_post" className='flex items-center justify-center bg-pink-600 text-white rounded-lg px-2 py-1'><BiUpload />Upload video</label>
                        <input id='video_to_post' className='hidden' accept='video/mp4,video/x-m4v,video/*' type="file" onChange={handleFileChange} />
                    </form>
                </div>
            </div>
        </div>
    )
}


export function postPopUp({ post, setShowPost }) {
    return (
        <div className='absolute w-screen h-screen bg-black/70 flex items-center justify-center'>
            <div className='w-3/5 rounded p-3 h-2/3 flex items-center justify-center bg-white'>
                <div className='w-1/2 h-full flex items-center justify-center flex-col'>
                    <div className='p-2 relative  z-[4] flex items-center justify-center flex-col rounded w-full h-full'>
                        <div className='mb-3 w-full flex items-center justify-start'>
                            <img className='rounded-full h-12 w-12 object-cover' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
                            <p className='pl-1'>precieux23</p>
                        </div>
                        <video className='w-full h-[45vh] rounded-lg' autoPlay={true} controls src={post.videoStr}></video>
                        <p className='mt-3 h-48 w-full whitespace-wrap'>{post.caption}</p>
                    </div>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className="comments flex flex-col items-center justify-center">
                        <Comments user={post} comment={"comment"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
