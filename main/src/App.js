import { Route, Routes } from "react-router-dom";
import AllListings from "./pages/AllListings";
import MyProjects from "./pages/MyProjects";
import NewProjectPage from "./pages/NewProject";
import MilestoneReview from "./pages/MilestoneReview";
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
        <AuthContextProvider>
          <Routes>
            {/*  Add a route here, change path and element to link a new page */}
            {/* Frontend routes */}
            <Route path="/" element={<AllListings />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/registration-company" element={<RegistrationCompany />} />
            <Route path="/registration-student" element={<RegistrationStudent />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />

            {/* Milestone Reviews */}
            <Route path="/milestone-overview" element={<MilestoneOverview />} />             {/* Show milestones */}
            <Route path="/milestone-review" element={<MilestoneReview />} />             {/* Add additional milestones only as a student */}
            <Route path="/milestone-details" element={<MilestoneDetails />} />              {/* Show milestone details*/}

            {/* Project Routes */}
            <Route path="/all-projects" element={< AllListings />} /> 
            <Route path="/new-project" element={<NewProjectPage />} />
            <Route path="/projects" element={<MyProjects />} />

            {/* Other Routes */}
            <Route path="/localboost-ai" element={<LocalBoostAI />} />

            {/* Test Routes */}
            <Route path="/test-upload" element={<TestUpload />} />
            <Route path="/test-fetch" element={<TestFetch />} />

          </Routes>
        </AuthContextProvider>
      </Layout>
    </div>
  );
}


export default App;
