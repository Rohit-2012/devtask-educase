import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from "./components/RootLayout"
import Landing from './screens/Landing'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Profile from './screens/Profile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
