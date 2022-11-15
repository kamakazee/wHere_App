import { fetchImages } from "../api"

const ImageGallery = () => {

    fetchImages().then((res) => {
        console.log(res)
    })

    return <h2>some images</h2>
}

export default ImageGallery