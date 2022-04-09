/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'
import "./Home.css"
function Home() {
    const [previewSource, setPreviewSource] = useState()
    const [fileInputState, setFileInputState] = useState('')
    const [imageIds, setImageIds] = useState()
    const [preview, setPreview] = useState()
    const loadImages = async () => {
        try {
            const res = await fetch('http://localhost:4040/api/images')
            const data = await res.json()
            console.log(data)
            setImageIds(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadImages()
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
        uploadImage(previewSource)
        console.log("Valid File entered uploading")
    }
    const uploadImage = async (base64EncodedImage) => {
        // console.log(base64EncodedImage);
        try {
            let upload = await fetch('http://localhost:4040/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (upload.status === 200 && upload.statusText === "OK") {
                console.log("Wow image uploaded");
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
                    <input value={fileInputState} className='fileinput' name='image' onChange={handleFileInputChange} type={'file'} />
                </div>
                <div>
                    <button type={'submit'} >Submit</button>
                </div>
            </form>
            <div className='preview'>
                {previewSource && (
                    <img src={previewSource} style={{ height: '300px' }} alt={'chosen'} />
                )}
            </div>
            <div>
                {imageIds && imageIds.reverse().map((imageId, index) => (
                    <div className='images'>
                        <div><p>Precieux</p></div>
                        <Image
                            key={index}
                            cloudName='precieux'
                            publicId={imageId}
                            width="300"
                            crop="scale"
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