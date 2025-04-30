import React from 'react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';

const Community = () => {
  return (
    <section className="py-2 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-success">Explore Community</h2>
        <h5 className="text-center mb-5 text-muted">
          Choose the right plan for your team and get started with TaskLeed.
        </h5>
        <div className="row d-flex justify-content-around gap-4">
          <div className="col-lg-4 col-md-4">
            <div className="card h-90 border-0 shadow-sm transition-all" style={{ minHeight: '250px', transition: '0.3s ease-in-out' }}>
              <div className="card-body text-center px-2 cursor-pointer">
                <div className="icon-container mb-3">
                  <img src={icon1} alt="Membership Organisations" />
                </div>
                <h4 className="card-title mb-3 text-muted">Membership Organisations</h4>
                <h6 className="card-text text-muted">
                  Streamline your team’s workflow by automating task assignments, tracking progress, and ensuring timely project completion.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="card h-90 border-0 shadow-sm transition-all" style={{ minHeight: '250px', transition: '0.3s ease-in-out' }}>
              <div className="card-body text-center p-4 cursor-pointer">
                <div className="icon-container mb-4">
                  <img src={icon2} alt="National Associations" />
                </div>
                <h4 className="card-title mb-3 text-muted">National Associations</h4>
                <h6 className="card-text text-muted">
                  Enhance collaboration across departments with real-time updates, shared workspaces, and seamless communication tools.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="card h-90 border-0 shadow-sm transition-all" style={{ minHeight: '250px', transition: '0.3s ease-in-out' }}>
              <div className="card-body text-center p-4 cursor-pointer">
                <div className="icon-container mb-3">
                  <img src={icon3} alt="Clubs And Groups" />
                </div>
                <h4 className="card-title mb-3 text-muted">Clubs And Groups</h4>
                <h6 className="card-text text-muted">
                  Organize events, assign responsibilities, and monitor deadlines with our intuitive task management features.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;