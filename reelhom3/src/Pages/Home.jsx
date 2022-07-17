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
import { getCookie } from '../Context/RequireAuth'
import { usePosts } from './../Context/PostContext'
import { checkForAccess } from '../Utils/checkForAccess'
import { AiOutlineSend } from 'react-icons/ai'
import { getUserById } from '../Context/AuthContext'

function Home(props) {
    const { allPosts, getSuggestions } = usePosts()


    const [showPostForm, setShowPostForm] = useState(false);
    const [suggestions, setSuggestions] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})



    // const getUser = async () => {
    //     const data = await getUserById(getCookie('userID'))
    //     if (!data) return window.location.replace('/login')
    //     setUser(data)
    // }

    const getPosts = async () => {
        const data = await allPosts()
        if (data) {
            setPosts(data)
        }
    }

    const userSuggestions = async () => {
        const data = await getSuggestions()
        console.log(data);
        setSuggestions(data)
        return data
    }

    // setUser(props.user)

    useEffect(() => {
        checkForAccess()
        // getUser()
        getPosts()
        userSuggestions()
    }, [])

    return (
        <div className='bg-[#ddd] flex flex-col items-center justify-start w-screen h-screen'>
            <Navbar user={props.user} />
            <div className='main-home h-full w-full flex items-start justify-center flex-row px-0 pt-16 sm:px-4 md:px-10 xl:px-16'>
                {showPostForm ? <CreatePostPopup user={props.user} setShowPostForm={setShowPostForm} /> : null}
                <div className="home-sections mx-2 mt-3 items-center justify-center flex-col w-3/12  rounded-lg py-4 h-2/3 hidden sm:flex md:flex xl:flex">
                    <div className='w-10/12 flex py-3 flex-col bg-white rounded-lg items-center justify-center'>
                        <img className='relative -top-16 rounded-full border-2 border-white w-32 h-32 object-cover' src={props.user.profile} alt="" />
                        <Link to={`/account/${props.user._id}`} className='relative text-black text-center text-2xl font-bold'>{props.user.fullname}</Link>
                        <p className='text-black text-center text-sm w-8/12 my-4'>{props.user.bio}</p>
                        <div className='flex items-center justify-around w-full'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-black text-center text-2xl font-bold'>Followers</h1>
                                <h1 className='text-black text-center text-xl font-bold'>{props.user.followers}</h1>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-black text-center text-2xl font-bold'>Following</h1>
                                <h1 className='text-black text-center text-xl font-bold'>{props.user.following}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-sections mx-2 mt-3 items-center justify-start flex-col w-4/12  rounded-lg py-4 sm:flex md:flex xl:flex" style={{ 'height': '98%' }}>
                    <div className='w-full flex items-center justify-around'>
                        <h1 className='text-xl my-3'>Recent reels</h1>
                        <button className='flex items-center justify-center text-white bg-pink-600 rounded py-1 px-4'><HiSortDescending />Sort</button>
                    </div>
                    <div className="post-sections pt-3 bg-white overflow-x-scroll items-center justify-start flex-col w-11/12 rounded-lg my-2 h-full sm:flex md:flex xl:flex">
                        {
                            posts.map(post => <Post key={post._id} post={post} user={props.user} />)

                        }
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
                        {suggestions.map((user) => {
                            return (

                                <Suggestion user={user} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>)
}

export default Home


export function CreatePostPopup({ user, setShowPostForm }) {

    const { newPost } = usePosts()

    const [formData, setFormData] = useState({
        videoStr: "",
        caption: ""
    })
    const [loader, setLoader] = useState(false)

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        setLoader(true)
        if (!formData.videoStr) {
            console.log(formData.videoStr);
            toast.error("Video cannot be empty", {
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
        const data = await newPost({ caption: formData.caption, videoStr: formData.videoStr })
        console.log(data)
        if (data.message !== "Post created succesfully") {
            toast.error(data.message, {
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
        
        setLoader(false)
        // setShowPostForm(false)

    }
    const previewFile = (base64VideoString) => {
        console.log("Before", formData.videoStr);
        setFormData({ ...formData, videoStr: base64VideoString })
        console.log("After", formData.videoStr);

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
                                <img className='rounded-full h-12 w-12' src={user.profile} alt="" />
                                <p className='pl-1'>{user.username}</p>
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
                        <input required id='video_to_post' className='hidden' accept='video/mp4,video/x-m4v,video/*' type="file" onChange={handleFileChange} />
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


export function postPopUp(props, { post, setShowPost }) {
    return (
        <div className='absolute w-screen h-screen bg-black/70 flex items-center justify-center'>
            <div className='w-3/5 rounded p-3 h-2/3 flex items-center justify-center bg-white'>
                <div className='w-1/2 h-full flex items-center justify-center flex-col'>
                    <div className='p-2 relative  z-[4] flex items-center justify-center flex-col rounded w-full h-full'>
                        <div className='mb-3 w-full flex items-center justify-start'>
                            <img className='rounded-full h-12 w-12 object-cover' src={props.user.profile} alt="" />
                            <p className='pl-1'>{props.user.username}</p>
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
