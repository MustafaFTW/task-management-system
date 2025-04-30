import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import logo from "../assets/images/logo.png";
import TaskLeed from "../assets/images/TaskLeed.png";
import { useAuth } from "./Authcontext";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth(); // Get the auth context

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      // Sign in with Firebase
      await auth.login(email, password);
      navigate('/workSpace');
    } catch (error) {
      setIsLoading(false);
      
      // Always show a user-friendly message, regardless of the error type
      setError("Invalid email or password. Please try again.");
      
      // Log the actual error for debugging only
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="img-fluid"
                    style={{ width: "60px", padding: "7px" }}
                  />
                  <img
                    src={TaskLeed}
                    alt="TaskLeed"
                    className="img-fluid"
                    style={{ width: "120px", cursor: "pointer" }}
                  />
                </div>
              </div>
              
              <h4 className="text-center mb-4">Sign In</h4>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="pb-3">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-4 text-end">
                  <Link to="/ForgotPassword" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>
                
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success w-100 mb-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="d-flex align-items-center justify-content-center">
                        <Loader2 className="me-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </span>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>
              </form>
              
              <div className="text-center mt-3">
                <p className="text-muted">
                  Don't have an account?{" "}
                  <Link to="/SignUp" className="text-decoration-none">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}