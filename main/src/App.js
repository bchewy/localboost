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
import ViewActiveProjects from "./pages/ViewActiveProjects";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthContextProvider } from "./components/auth/AuthContext";

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
      <Layout>
        {/* <AuthContextProvider> */}
          <Routes>
            {/*  Add a route here, change path and element to link a new page */}
            <Route path="/" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/Milestone-review" element={<MilestoneReview />} />
            <Route path="/active-projects" element={<ViewActiveProjects />} />
            {/* Authentication Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/registration-company" element={<RegistrationCompany />} />
            <Route path="/registration-student" element={<RegistrationStudent />} />

            {/* Project Routes */}
            <Route path="/all-projects" element={<AllProjectsPage />} />
            <Route path="/new-project" element={<NewProjectPage />} />
            <Route path="/Milestones" element={<Milestone />} />
            <Route path="/Milestone-review" element={<MilestoneReview />} />

            {/* Other Routes */}
            <Route path="/localboost-ai" element={<LocalBoostAI />} />
            <Route path="/timeline-test" element={<TimelineTest />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />

            {/* Test Routes */}
            <Route path="/test-upload" element={<TestUpload />} />
            <Route path="/test-fetch" element={<TestFetch />} />

          </Routes>
        {/* </AuthContextProvider> */}
      </Layout>
    </div>
  );
}


export default App;
