import { Route, Routes } from "react-router-dom";
import AllProjectsPage from "./pages/AllProjects";
import NewProjectPage from "./pages/NewProject";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';
import TestUpload from "./pages/TestUpload";
import TestFetch from "./pages/TestFetch";
import ChatAI from "./pages/chatai";

function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path="/" element={<AllProjectsPage />} />
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />
        {/*  Add a route here, change path and element to link a new page */}
        <Route path="/chatai" element={<ChatAI />} />
      </Routes>
      </Layout>
    </div>
  );
}


export default App;
