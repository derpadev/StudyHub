import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { CreatePostPage } from "./pages/CreatePostPage";
import { PostPage } from "./pages/PostPage";
import { CreateCommunity } from "./components/CreateCommunity";
import { CommunityList } from "./components/CommunityList";

function App() {
  return (
    <div className="bg-black min-h-screen text-gray-100 transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="px-4 py-6 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/community/create" element={<CreateCommunity />} />
          <Route path="/communities" element={<CommunityList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
