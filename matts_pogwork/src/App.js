import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';
import TestUpload from "./pages/TestUpload";
import TestFetch from "./pages/TestFetch";

function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/test-upload" element={<TestUpload />} />
        <Route path="/test-fetch" element={<TestFetch />} />
      </Routes>
      </Layout>
    </div>
  );
}


export default App;
