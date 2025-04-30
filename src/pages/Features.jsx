import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import feature1 from '../assets/images/Feature-1.png';
import feature2 from '../assets/images/Feature-2.png';
import feature3 from '../assets/images/Feature-3.png';
import feature4 from '../assets/images/Feature-4.png';
import feature5 from '../assets/images/Feature-5.png';
import feature6 from '../assets/images/Feature-6.png';

function Features() {
  return (
    <>
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container text-center py-4 mt-5 mb-3">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature1} alt="Instant Overview" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb- text-muted">Real-Time Dashboard</h3>
                <p className="mb-0">
                  Get instant visibility into all<br />
                  your team's tasks and projects<br />
                  with our live activity feed.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature2} alt="Smart Assignment" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb-3 text-muted">Smart Task Assignment</h3>
                <p className="mb-0">
                  Automatically assign tasks to<br />
                  the right team members based<br />
                  on skills and availability.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature3} alt="Custom Workflows" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb-3 text-muted">Custom Workflows</h3>
                <p className="mb-0">
                  Adapt the system to your<br />
                  team's unique processes with<br />
                  fully customizable stages.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature4} alt="Progress Tracking" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb-3 text-muted">Progress Analytics</h3>
                <p className="mb-0">
                  Track completion rates and<br />
                  identify bottlenecks with<br />
                  detailed performance reports.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature5} alt="Easy Setup" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb-3 text-muted">Quick Setup</h3>
                <p className="mb-0">
                  Get started in minutes with<br />
                  intuitive tools that require<br />
                  no technical training.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 h-100 rounded shadow-sm text-center">
                <img src={feature6} alt="Team Collaboration" className="img-fluid mb-3" style={{height: "80px"}} />
                <h3 className="h4 mb-3 text-muted">Team Collaboration</h3>
                <p className="mb-0">
                  Built-in chat and file sharing<br />
                  keeps all communication<br />
                  tied to specific tasks.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-success px-4 fw-semibold py-1 mt-2 mt-5">
                  Start Free Trial
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;