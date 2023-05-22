import { Route, Routes } from "react-router-dom";
import AllListings from "./pages/AllListings";
import MyProjects from "./pages/MyProjects";
import NewProjectPage from "./pages/NewProject";
import MilestoneReview from "./pages/MilestoneReview";
import Milestone from "./pages/Milestone";
import MilestoneOverview from "./pages/MilestoneOverview";
import MilestoneDetails from "./pages/MilestoneDetails";
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
import LocalBoostAI from "./pages/LocalBoostAI";

function App() {
  return (
    <div>
     <Layout>
      
      <Routes>
        {/*  Add a route here, change path and element to link a new page */}
        {/* Project Routes */}
        <Route path="/" element={<AllListings />} />
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="/milestones" element={<Milestone />} />

        {/* End user Authentication Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/registration-company" element={<RegistrationCompany />} />
        <Route path="/registration-student" element={<RegistrationStudent />} />
        <Route path="/milestone-review" element={<MilestoneReview />} />
        <Route path="/milestone-overview" element={<MilestoneOverview />} />
        <Route path="/milestone-details" element={<MilestoneDetails />} />
        <Route path="/projects" element={<MyProjects />} />

        {/* Other Routes */}
        <Route path="/localboost-ai" element={<LocalBoostAI />} />
        <Route path="/timeline-test" element={<TimelineTest />} />

        {/* Test Routes */}
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />

      </Routes>
      </Layout>
    </div>
  );
}


export default App;
