import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage({ setRole }) {
  const navigate = useNavigate();

  const handleEnter = (selectedRole) => {
    setRole(selectedRole); 
    if (selectedRole === "user") navigate("/user");
    else if (selectedRole === "employer") navigate("/employer");
  };

  return (
    <div className="landing-container">
      <div className="background"></div>

      <div className="content">
        <h1 className="title">Welcome to Job Portal Application</h1>
        <p className="subtitle">Find your dream job or hire top talent</p>

        <div className="buttons">
          <button
            className="btn user-btn"
            onClick={() => handleEnter("user")}
          >
            Enter as User
          </button>
          <button
            className="btn employer-btn"
            onClick={() => handleEnter("employer")}
          >
            Enter as Employer
          </button>
        </div>
      </div>
    </div>
  );
}
