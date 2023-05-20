import { Route, Routes } from "react-router-dom";
import AllProjectsPage from "./pages/AllProjects";
import NewProjectPage from "./pages/NewProject";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';
import TestUpload from "./pages/TestUpload";
import TestFetch from "./pages/TestFetch";
import ChatAI from './pages/ChatAI';
import SignIn from "./pages/SignIn";
import RegistrationCompany from "./pages/RegistrationCompany";
import RegistrationStudent from "./pages/RegistrationStudent";
import TimelineTest from "./pages/timeline-test";

function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path="/" element={<AllProjectsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/new-Project" element={<NewProjectPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />
        <Route path="/registration-company" element={<RegistrationCompany />} />
        <Route path="/registration-student" element={<RegistrationStudent />} />
        {/*  Add a route here, change path and element to link a new page */}
        <Route path="/chatai" element={<ChatAI />} />
        <Route path="/timeline-test" element={<TimelineTest />} />
      </Routes>
      </Layout>
    </div>
  );
}


export default App;
