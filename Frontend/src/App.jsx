import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import UploadFile from "./pages/UploadFile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />}></Route>
      <Route path="/create-post" element={<UploadFile />}></Route>
    </Routes>
  )
}

export default App