import { FaHome, FaTasks, FaCalendarAlt, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';

const SideBar = () => {
  // Style objects
  const iconContainerStyle = {
    width: '36px',
    height: '36px',
    backgroundColor: 'whitesmoke',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    color: '#28a745',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 15px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: '#333',
    marginBottom: '5px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(40, 167, 69, 0.1)'
    },
    ':hover div': {  // Target icon container on hover
      backgroundColor: '#e8f5e9'  // Light green background on hover
    },
    ':hover svg': {  // Target icon on hover
      color: '#1e7e34'  // Darker green on hover
    }
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    fontWeight: '500',
    'div': {  // Active state icon container
      backgroundColor: '#e8f5e9'
    },
    'svg': {  // Active state icon
      color: '#1e7e34'
    }
  };

  // Convert style objects to CSS-in-JS strings
  const createStyles = (styles) => {
    return Object.entries(styles).reduce((acc, [key, value]) => {
      if (typeof value === 'object') {
        return `${acc}${key}{${createStyles(value)}}`;
      }
      return `${acc}${key.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${value};`;
    }, '');
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm" style={{ width: '250px', height: '100vh' }}>
      <style>{`
        .sidebar-menu-item {
          ${createStyles(menuItemStyle)}
        }
        .sidebar-menu-item:hover {
          ${createStyles(menuItemStyle[':hover'])}
        }
        .sidebar-menu-item.active {
          ${createStyles(activeMenuItemStyle)}
        }
      `}</style>
      
      <div className="d-flex align-items-center mb-4 px-2">
        <h5 className="my-0 fw-bold">TaskFlow</h5>
      </div>
      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="sidebar-menu-item active">
            <div style={iconContainerStyle}>
              <FaHome style={iconStyle} />
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="sidebar-menu-item">
            <div style={iconContainerStyle}>
              <FaTasks style={iconStyle} />
            </div>
            <span>My Tasks</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="sidebar-menu-item">
            <div style={iconContainerStyle}>
              <FaCalendarAlt style={iconStyle} />
            </div>
            <span>Calendar</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="sidebar-menu-item">
            <div style={iconContainerStyle}>
              <FaChartBar style={iconStyle} />
            </div>
            <span>Analytics</span>
          </a>
        </li>
      </ul>
      
      <div className="border-top pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="sidebar-menu-item">
              <div style={iconContainerStyle}>
                <FaCog style={iconStyle} />
              </div>
              <span>Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="sidebar-menu-item">
              <div style={iconContainerStyle}>
                <FaSignOutAlt style={iconStyle} />
              </div>
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;