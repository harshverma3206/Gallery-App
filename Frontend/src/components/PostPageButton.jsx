import { useNavigate } from "react-router-dom"
import { IoCaretBackOutline } from "react-icons/io5";

const PostPageButton = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }

    

    return (
        <div className="">
            <button onClick={handleNavigate} className="fixed bottom-25 right-1/2 translate-x-1/2 bg-blue-600 p-5 rounded-full text-amber-50">
                <IoCaretBackOutline />
            </button>
        </div>
    )
}

export default PostPageButton