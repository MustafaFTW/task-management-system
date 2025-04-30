// src/pages/workSpace.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/Authcontext';
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import MainBody from "../components/mainBody";

const WorkSpace = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!currentUser) {
      navigate('/Login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Pass current user data to NavBar */}
      <NavBar user={currentUser} />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <SideBar user={currentUser} />
        </div>
        <div className="w-3/4 p-6 overflow-y-auto">
          <MainBody user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;