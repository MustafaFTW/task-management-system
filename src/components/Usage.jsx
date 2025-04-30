import { Link } from 'react-router-dom'; 
import task1 from '../assets/images/task1.png'; 

const Usage = () => {
    return (
        <section className="bg-light py-5">
            <div className="container-fluid px-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-8">
                <div className="col-md-6 mb-4 mb-md-0 mt-5">
                    <img src={task1} alt="Task Management" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2 className="display-4 mb-4 text-muted">Track and Manage Your Tasks Effectively</h2>
                    <h5 className="mb-4 text-muted">
                        Stay on top of your tasks with our intuitive task management system. Get a clear overview of all your tasks, monitor progress in real-time, and ensure nothing falls through the cracks. Whether you're managing personal to-dos or team projects.
                    </h5>
                    <div className="mb-4 pb-5">
                        <h5 className="text-muted mb-3">
                        TaskLeed has got you covered. Sign up today and start managing your tasks more efficiently.
                        </h5>
                        <Link to="/SignUp" className="text-decoration-none text-success fw-bold fs-5 p-0 mr-5">Register Now →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Usage;