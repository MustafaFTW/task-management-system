import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from "./Authentication/Authcontext";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/Signup";
import ForgotPassword from "./Authentication/ForgetPassword";
import WorkSpace from './pages/workSpace';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        
        {/* Authentication routes */}
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/workSpace' element={<WorkSpace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;