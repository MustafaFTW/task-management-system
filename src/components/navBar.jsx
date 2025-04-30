import { FaBell, FaUserCircle, FaSearch, FaMoon } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import TaskLeed from '../assets/images/TaskLeed.png'; 
import { useState } from 'react';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="img-fluid" style={{ width: '60px', padding: '7px' }} />
          <img src={TaskLeed} alt="TaskLeed" className="img-fluid" style={{ width: '120px', cursor: 'pointer' }} />
        </div>
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={() => setShowDropdown(!showDropdown)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="position-relative mx-auto d-none d-lg-block" style={{ maxWidth: '500px', width: '100%' }}>
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5 bg-light border-0 rounded-pill text-muted"
            placeholder="Search tasks..."
            style={{ height: '40px' }}
          />
        </div>
        <div className={`d-flex align-items-center gap-0 ${showDropdown ? 'show' : 'd-none d-lg-flex'}`}>
          <button className="btn p-0 rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '36px', height: '36px', backgroundColor: 'whitesmoke' }}>
            <FaMoon size={18} className="text-success" />
          </button>
          
          <button className="btn p-0 rounded-circle d-flex align-items-center justify-content-center position-relative" 
                  style={{ width: '36px', height: '36px', backgroundColor: 'whitesmoke' }}>
            <FaBell size={18} className="text-success" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" 
                  style={{ fontSize: '0.6rem' }}>
              0
            </span>
          </button>
          
          <div className="dropdown">
            <button 
              className="btn p-0 rounded-circle d-flex align-items-center justify-content-center dropdown-toggle" 
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: '36px', height: '36px', backgroundColor: 'whitesmoke' }}
            >
              <FaUserCircle size={18} className="text-success" />
            </button>
            <ul 
              className="dropdown-menu dropdown-menu-end shadow-sm border-0" 
              aria-labelledby="userDropdown"
            >
              <li><a className="dropdown-item text-muted" href="#">Profile</a></li>
              <li><a className="dropdown-item text-muted" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-muted" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;