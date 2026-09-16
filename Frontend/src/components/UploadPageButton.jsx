import { useNavigate } from "react-router-dom"
import { GoPlus } from "react-icons/go";

const UploadPageButton = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/create-post')
    }

    return (
        <div className="">
            <button onClick={handleNavigate} className="fixed bottom-25 right-1/2 translate-x-1/2 bg-blue-600 p-5 rounded-full text-amber-50">
                <GoPlus size={25} />
            </button>
        </div>
    )
}

export default UploadPageButton