import { Route, Routes } from "react-router-dom";
import AllProjectsPage from "./pages/AllProjects";
import NewProjectPage from "./pages/NewProject";
import Milestone_review from "./pages/Milestone-review";
import Milestone from "./pages/Milestone";
import Layout from './components/layout/Layout';
import TestUpload from "./pages/TestUpload";
import TestFetch from "./pages/TestFetch";
import ChatAI from './pages/ChatAI';
import SignIn from "./pages/SignIn";
import RegistrationCompany from "./pages/RegistrationCompany";
import RegistrationStudent from "./pages/RegistrationStudent";

function App() {
  return (
    <div>
     <Layout>
      
      <Routes>
        <Route path="/" element={<AllProjectsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="/milestone-review" element={<Milestone_review />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />
        <Route path="/registration-company" element={<RegistrationCompany />} />
        <Route path="/registration-student" element={<RegistrationStudent />} />
        {/*  Add a route here, change path and element to link a new page */}
        <Route path="/chatai" element={<ChatAI />} />
      </Routes>
      </Layout>
    </div>
  );
}


export default App;
