import React, { useState, useEffect } from 'react'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BiUpload } from 'react-icons/bi'
import Post from './../Components/Post'
function Home() {
    const [showPostForm, setShowPostForm] = useState(false);
    const getPosts = () => {

    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div className='main-home h-screen w-screen flex items-start justify-center flex-row px-0 sm:px-4 md:px-10 xl:px-16'>
            {showPostForm ? <CreatePostPopup setShowPostForm={setShowPostForm} /> : null}
            <div className="home-sections mx-2 mt-3 items-start justify-center flex-col w-3/12 bg-blue-600 rounded-lg py-4 h-2/3 hidden sm:flex md:flex xl:flex"></div>
            <div className="home-sections mx-2 mt-3 items-center justify-start flex-col w-5/12 bg-green-600 rounded-lg py-4 sm:flex md:flex xl:flex" style={{ 'height': '98%' }}>
                <div className="new-post-sections items-start justify-around flex w-11/12 bg-white rounded-lg my-2 h-24 sm:flex md:flex xl:flex p-3">
                    <img src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" className='rounded-full h-16 w-16' alt="" />
                    <div className="flex items-center w-3/5 flex-col justify-center">
                        <div className='h-2/5 flex items-start justify-center'>
                            <button onClick={() => setShowPostForm(true)} className='flex items-center justify-center bg-pink-600 text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Add video</button>
                            <button className='flex items-center justify-center bg-pink-600 text-white px-2 py-1 m-1 rounded-lg'><MdOutlineVideoLibrary />Create video</button>
                        </div>
                    </div>
                </div>
                <div className="post-sections rounded-lg overflow-x-scroll items-center justify-start flex-col w-11/12 rounded-lg my-2 h-4/5 sm:flex md:flex xl:flex">
                    <Post posterData={{ _id: (Math.floor(Math.random() * 999999)), username: "precieux23", profile: 'https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg' }} post={{ caption: "Don't pour the water", videoUrl: 'https://v16-webapp.tiktok.com/8f6fbb374f69f9458efd03807d465a47/62ceb30d/video/tos/useast2a/tos-useast2a-pve-0068/6884339267e74020b35429e69435b78e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1354&bt=677&btag=80000&cs=0&ds=3&ft=eXd.6HnlMyq8ZQPNXwe2NuY0yl7Gb&mime_type=video_mp4&qs=0&rc=Mzw7aTczZjY1NTZmOTxkOUBpMzo2ajc6ZjRnZTMzNzczM0BfXi8wXl9hNV4xMDYxMV4uYSNqYmBrcjRfcjBgLS1kMTZzcw%3D%3D&l=20220713055556010190208043240ABE6B' }} />
                    <Post posterData={{ _id: (Math.floor(Math.random() * 999999)), username: "precieux23", profile: 'https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg' }} post={{ caption: "Don't pour the water", videoUrl: 'https://v16-webapp.tiktok.com/8f6fbb374f69f9458efd03807d465a47/62ceb30d/video/tos/useast2a/tos-useast2a-pve-0068/6884339267e74020b35429e69435b78e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1354&bt=677&btag=80000&cs=0&ds=3&ft=eXd.6HnlMyq8ZQPNXwe2NuY0yl7Gb&mime_type=video_mp4&qs=0&rc=Mzw7aTczZjY1NTZmOTxkOUBpMzo2ajc6ZjRnZTMzNzczM0BfXi8wXl9hNV4xMDYxMV4uYSNqYmBrcjRfcjBgLS1kMTZzcw%3D%3D&l=20220713055556010190208043240ABE6B' }} />
                </div>
            </div>
            <div className="home-sections mx-2 mt-3 items-start justify-center flex-col w-3/12 bg-yellow-400 rounded-lg py-4 h-2/3 hidden sm:flex md:flex xl:flex"></div>
        </div>)
}

export default Home



function CreatePostPopup({ setShowPostForm }) {

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
            alert("Video must be less than 10MB");
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
        <div className={`flex z-[3] items-center justify-center absolute w-screen h-screen bg-black/70`}>
            <div className='bg-transparent h-full w-full absolute top-0 left-0 z-[5]' onClick={() => setShowPostForm(false)}></div>
            <div className='bg-white z-[10] w-1/2 h-4/5 rounded-lg text-black flex items-center justify-center'>
                <div onDrag={dragEvent} onDragEnd={dropEvent} className='flex flex-col items-center rounded-lg justify-center w-1/2 h-full' style={{ 'border': '3px dashed grey' }}>
                    {(formData.videoStr || formData.caption) ?
                        (<div className='p-2 relative  z-[4] flex items-center justify-center flex-col rounded w-full h-full'>
                            <div className='mb-3 w-full flex items-center justify-start'>
                                <img className='rounded-full h-12 w-12' src="https://i.ytimg.com/an_webp/ec6yCWX9LGs/mqdefault_6s.webp?du=3000&sqp=CPO2uZYG&rs=AOn4CLDPH3cjPFLObtjfOmu1uDlNVGqNcg" alt="" />
                                <p className='pl-1'>precieux23</p>
                            </div>
                            <video className='w-full h-[45vh]' autoPlay={true} controls src={formData.videoStr}></video>
                            <p className='mt-3 h-48 w-full whitespace-wrap'>{formData.caption}</p>
                        </div>)
                        :
                        (<label htmlFor="video_to_post" className='relative hidden z-[3] w-full flex-col h-full flex items-center justify-center'>
                            <AiOutlineVideoCameraAdd size={70} color={'#5c5858'} />
                            <p>Click to add a video here or drag it here</p>
                        </label>)
                    }
                </div>
                <div className='w-1/2 h-full  flex  justify-center flex-col items-center'>
                    <h2 className='text-xl font-bold'>Create New Post</h2>
                    <form onSubmit={handleSubmitForm} className='flex flex-col items-center justify-center w-full'>
                        <textarea maxLength={500} className='rounded-lg border-2 w-4/5 border-black h-48 my-3 p-3' placeholder='Type something' type="text" onChange={(e) => { setFormData({ ...FormData, caption: e.target.value }) }}></textarea>
                        <label htmlFor="video_to_post" className='flex items-center justify-center bg-pink-600 text-white rounded-lg px-2 py-1'><BiUpload />Upload video</label>
                        <input id='video_to_post' className='hidden' type="file" onChange={handleFileChange} />
                    </form>
                </div>
            </div>
        </div>
    )
}

