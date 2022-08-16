import { Route, Routes } from "react-router-dom";
import AuthPage from "./page/AuthPage";
import HomePage from "./page/HomePage";
import MessagePage from "./page/MessagePage";
import NotFoundPage from "./page/NotFoundPage";
import PostPage from "./page/PostPage";
import ProfilePage from "./page/ProfilePage";
import StoryPage from "./page/StoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:profileID" element={<ProfilePage />} />
      <Route path="/posts/:postID" element={<PostPage />} />
      <Route path="/messages/:messageID" element={<MessagePage />} />
      <Route path="/stories/:storyID" element={<StoryPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
