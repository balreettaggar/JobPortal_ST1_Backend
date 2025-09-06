import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./EmployerPage.css";
import { FaBriefcase, FaUsers, FaChartBar } from "react-icons/fa";

export default function EmployerPage({ user, setUser, role }) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar user={user} setUser={setUser} role={role} />

      <section className="hero">
        <h1>Welcome, Employer!</h1>
        <p>Manage your job postings and candidates efficiently</p>
      </section>

      <section id="features" className="features">
        <div className="card" onClick={() => navigate("/post-job")}>
          <FaBriefcase size={40} color="#f76c6c" />
          <h3>Post a Job</h3>
        </div>

        <div className="card" onClick={() => navigate("/manage-applicants")}>
          <FaUsers size={40} color="#f76c6c" />
          <h3>Manage Applicants</h3>
        </div>

        <div className="card" onClick={() => navigate("/analytics")}>
          <FaChartBar size={40} color="#f76c6c" />
          <h3>Analytics</h3>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <h2>Employer Reviews</h2>
        <p>⭐⭐⭐⭐⭐ "Found top talent quickly with this portal."</p>
        <p>⭐⭐⭐⭐ "Easy job posting and applicant tracking."</p>
      </section>

      <Footer />
    </div>
  );
}
