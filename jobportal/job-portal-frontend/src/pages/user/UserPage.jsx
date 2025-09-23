
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./UserPage.css";
import { FaFileAlt, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

export default function UserPage({ user, setUser, role }) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar user={user} setUser={setUser} role={role} />

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome, Job Seeker!</h1>
        <p>Explore tools to boost your career journey</p>
        <a href="/jobs" className="cta-btn">Find Jobs</a>
      </section>

      {/* Features Section (2-column layout) */}
      <section id="features" className="features-section">
        {/* Left Side: Cards */}
        <div className="features">
          <div className="card" onClick={() => navigate("/resume-builder")}>
            <FaFileAlt size={40} color="#6e8efb" />
            <h3>Resume Builder</h3>
          </div>

          <div className="card" onClick={() => navigate("/interview-prep")}>
            <FaChalkboardTeacher size={40} color="#6e8efb" />
            <h3>Interview Prep</h3>
          </div>

          <div className="card" onClick={() => navigate("/jobs")}>
            <FaBriefcase size={40} color="#6e8efb" />
            <h3>Jobs</h3>
          </div>
        </div>

        {/* Right Side: Info Block */}
        <div className="features-info">
          <h2>Why Choose Us?</h2>
          <p>
            Our platform is trusted by job seekers and leading companies alike.
            With AI-powered tools for resume building, personalized interview
            preparation, and access to thousands of job listings, we make sure
            your career journey is smoother and smarter.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <h2>User Reviews</h2>
        <p>⭐⭐⭐⭐⭐ "This portal helped me get my first job!"</p>
        <p>⭐⭐⭐⭐ "Amazing tools for interview prep."</p>
      </section>

      {/* Companies Marquee Section */}
      <section className="companies">
        <h2>Trusted by Top Companies</h2>
        <div className="marquee">
          <img src="/images/microsoft.png" alt="Microsoft" />
          <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/Accenture.png" alt="Accenture" /> {/* Capital A */}
          <img src="/images/tcs.png" alt="TCS" />
          <img src="/images/infosys.png" alt="Infosys" />
          <img src="/images/google.png" alt="Google" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
