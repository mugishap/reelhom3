/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'
import "./Home.css"
function Home() {
    const [previewSource, setPreviewSource] = useState()
    const [fileInputState, setFileInputState] = useState('')
    const [imageIds, setImageIds] = useState()
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
        e.preventDefault()
        if (!previewSource) return;
        uploadImage(previewSource)
    }
    const uploadImage = async (base64EncodedImage) => {
        // console.log(base64EncodedImage);
        try {
            await fetch('http://localhost:4040/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmitFile}>
                <div>
                    <label>Select file</label>
                    <input value={fileInputState} className='fileinput' name='image' onChange={handleFileInputChange} type={'file'} />
                </div>
                <div>
                    <button type={'submit'} >Submit</button>
                </div>
            </form>
            {previewSource && (
                <img src={previewSource} style={{ height: '300px' }} alt={'chosen'} />
            )}
            <div>
                {imageIds && imageIds.map((imageId, index) => (
                    <Image
                        key={index}
                        cloudName='precieux'
                        publicId={imageId}
                        width="300"
                        crop="scale"
                    />
                ))}
            </div>

        </div>
    )
}

export default Home