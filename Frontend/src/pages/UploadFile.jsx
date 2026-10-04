import { useNavigate } from "react-router-dom";
import PostPageButton from "../components/PostPageButton";
import axios from 'axios';

const UploadFile = () => {
  const naviagate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);

    console.log(formData);

    axios
      .post("https://gallery-appbackend.onrender.com/create-post", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    await naviagate('/')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-3 max-w-sm p-7 bg-white border border-blue-400 rounded-lg shadow w-100"
      >
        <input
          type="file"
          name="image"
          accept="image/*"
          className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 file:font-medium hover:file:bg-blue-100 cursor-pointer"
        />

        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Upload
        </button>
      </form>
      <PostPageButton />
    </div>
  )
}

export default UploadFile
