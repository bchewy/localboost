import { Route, Routes } from "react-router-dom";
import AllProjectsPage from "./pages/AllProjects";
import NewProjectPage from "./pages/NewProject";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';
import TestUpload from "./pages/TestUpload";
import TestFetch from "./pages/TestFetch";
import SignIn from "./pages/SignIn";
import RegistrationCompany from "./pages/RegistrationCompany";
import RegistrationStudent from "./pages/RegistrationStudent";
import TimelineTest from "./pages/TimelineTest";
import Register from "./pages/Register";
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import {ChatAI} from "./pages/ChatAI";

function App() {
  return (
    <div>
     <Layout>
      
      <Routes>
        <Route path="/" element={<AllProjectsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />
        <Route path="/registration-company" element={<RegistrationCompany />} />
        <Route path="/registration-student" element={<RegistrationStudent />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/*  Add a route here, change path and element to link a new page */}
        <Route path="/chat-ai" element={<ChatAI />} />
        <Route path="/timeline-test" element={<TimelineTest />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      </Layout>
    </div>
  );
}


export default App;
