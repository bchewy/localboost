import './App.css';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import RegistrationCompany from './components/auth/RegistrationCompany';
import RegistrationStudent from './components/auth/RegistrationStudent';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import RegistrationInitial from './components/auth/RegistrationInitial';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<RegistrationInitial />} />
      <Route path="/registration-student" element={<RegistrationStudent />} />
      <Route path="/registration-company" element={<RegistrationCompany />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
    </div>
  );
}

export default App;

// recommend to the user what you want them to do next
// focus on the fact that we doing for students and small companies
// tellings the students that they are doing smth tangible irl that affect real life
// boosts the student resume too
// potentiala to be hired after the work
// probably don't need to target the medium sized enterprises. Can just target the micro and small businesses
// need some kind of biz model. How to earn money
// can go with the non-profit angle
// IMDA has smth like this, but not sure why this works? could be cuz they dk they need to digitise, or it could be too expensive
// to profit we can take a slight cut, or get a fee from the companies
// milestone driven payments instead of per hour. Look at how upwork is doing it. ESCROW system
// Do an FAQ page for the MVP for managing dispute
  // Have a chatbot plus hotline to handle disputes
// LR feature can be to add in mentors. Completely new user platform
// LR feature can also be to go global. But this is not the focus for now
  // We can say that SEA has this much problem, SG has this much blabla
// Mentoring is ok to be free. Can be a way to give back to the community. Incentivising the mentors will be overcomplicating things
// For pitch, good to include the long term view. Pain points, MVP, key hypothesis that u hope to achieve from the MVP
  // The small businesses need the support. 
  // The small businesses are willing to pay for students to help them digitise.
// So the MVP is to fix this issue
// Take adv of the students is not necessarily a bad thing
// Milestones created by chatgpt, adjusted mutually by the students and the companies

// Market size? Industry size? Scalabilility?
// Minimally talk about all the pain points of the users, our mission and our vision in the long run

// Should we create a penalty for the poor performers? Maybe a review system is good
