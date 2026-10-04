import UploadPageButton from "../components/UploadPageButton"
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from 'axios';

const Post = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios.get("https://gallery-appbackend.onrender.com")
      .then((res) => {
        setGalleryItems(res.data.data);
      })
  }, [galleryItems])

  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://gallery-appbackend.onrender.com/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="gallery-grid">
          {
            galleryItems.length > 0 ? (galleryItems.map((item, index) => (
              <figure className="gallery-item relative cursor-pointer" key={index} >
                <div
                  onClick={() => deleteItem(item._id)}
                  className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-0.5 cursor-default active:scale-85">
                  <RxCross2 size={10} />
                </div>
                <img src={item.image} alt={item.caption} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))) : (
              <h1>No Post Available...</h1>
            )
          }
        </div>
        <UploadPageButton />
      </div>
    </>
  )
}

export default Post
