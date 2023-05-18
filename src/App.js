import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn />
      <AuthDetails />
    </div>
  );
}

export default App;
