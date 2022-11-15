import { useEffect, useState } from "react"
import { fetchImages } from "../api"
var fs = require("fs")
const ImageGallery = () => {

    let [images, setImages] = useState([])
    var example 
    useEffect(() => {
        fetchImages().then(data => {
            setImages(data)
            console.log(data[0].img.data.toString())
            example = data[0].img.data.toString('base64')
        })
    }, [])

    return <><h2>some images</h2>
    <img src={`data:image/png;base64,${example}`}></img>
    {images !== [] ? images.map((image) => <p>{image.name}</p>) : null}
    {images !== [] ? images.map((image) => <img src={`data:image/png;base64,${image.img.data.toString('base64')}`}></img>) : null}
    </>
}

export default ImageGallery