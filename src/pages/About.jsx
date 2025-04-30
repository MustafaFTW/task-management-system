import { FiRefreshCw, FiSettings, FiUsers } from 'react-icons/fi';
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import aboutImg from '../assets/images/about.png';
import TaskLeed from '../assets/images/TaskLeed.png';
const About = () => {
  return (
    <>
      <Header />
      <div className="container-fluid py-5" style={{ background: '#f8f9fa', minHeight: '80vh' }}>
        <div className="container py-5 mb-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-1 order-2 mb-5">
              <div className="feature-list mb-4">
              <div className="d-flex align-items-center mb-5 my-5">
                 <img src={TaskLeed} alt="TaskLeed" className="img-fluid" style={{ width: '150px' ,cursor:'pointer'}} />
               </div>
                <div className="d-flex align-items-start mb-4">
                  <FiRefreshCw className="me-3" style={{ color: '#3a86ff', fontSize: '1.5rem' }} />
                  <div className="text-muted fw-semibold ">Real-time task tracking and updates</div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <FiSettings className="me-3" style={{ color: '#3a86ff', fontSize: '1.5rem' }} />
                  <div  className="text-muted fw-semibold">Customizable workflows for different projects</div>
                </div>
                <div className="d-flex align-items-start">
                  <FiUsers className="me-3" style={{ color: '#3a86ff', fontSize: '1.5rem' }} />
                  <div  className="text-muted fw-semibold">Seamless team collaboration features</div>
                </div>
              </div>
              <button 
                className="btn btn-primary px-3 py-2 fw-semibold mx-auto"
                style={{ 
                  borderRadius: '50px',
                  fontSize: '.8rem',
                  background: 'green',
                  border: 'none'
                }}
              >
                Explore Features
              </button>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="rounded-3">
                <img 
                  src={aboutImg} 
                  alt="Team collaborating on task management" 
                  className="img" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;