/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { video, Video } from 'cloudinary-react'
import "./Home.css"
function Home() {
    const [previewSource, setPreviewSource] = useState()
    const [fileInputState, setFileInputState] = useState('')
    const [videoIds, setvideoIds] = useState()
    const [preview, setPreview] = useState()
    const loadvideos = async () => {
        try {
            const res = await fetch('http://localhost:4040/api/videos')
            const data = await res.json()
            console.log(data)
            setvideoIds(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadvideos()
    }, [])
    const handleFileInputChange = e => {
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    const handleSubmitFile = (e) => {
        console.log("Submitting")
        e.preventDefault()
        if (!previewSource) return;
        uploadvideo(previewSource)
        console.log("Valid File entered uploading")
    }
    const uploadvideo = async (base64EncodedVideo) => {
        console.log(base64EncodedVideo);
        try {
            let upload = await fetch('http://localhost:4040/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedVideo }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (upload.status === 200 && upload.statusText === "OK") {
                console.log("Wow video uploaded");
                setPreview()
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='main'>
            <form onSubmit={handleSubmitFile}>
                <div>
                    <label>Select file</label>
                    <input value={fileInputState} className='fileinput' name='video' onChange={handleFileInputChange} type={'file'} />
                </div>
                <div>
                    <button type={'submit'} >Submit</button>
                </div>
            </form>
            <div className='preview'>
                {previewSource && (
                    <video src={previewSource} autoPlay={true} />
                )}
            </div>
            <div>
                {videoIds && videoIds.map((videoId, index) => (
                    <div className='videos'>
                        <div><p>Precieux</p></div>
                        <Video
                            key={index}
                            cloudName='precieux'
                            publicId={videoId}
                            autoPlay={true}
                            width={'400'}
                            height={'700'}
                        />
                        <div><p>This is a caption by the way</p></div>
                        <hr />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home