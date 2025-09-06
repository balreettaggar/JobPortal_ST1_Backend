import React from "react";
import "./InterviewDetails.css";
import { useNavigate } from "react-router-dom";

const InterviewDetails = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/interview-practice");
  };

  return (
    <div className="details-container">
      <h2 className="details-header">Interview Details</h2>

      <div className="details-card">
        <h3>Software Engineer</h3>
        <p className="role-type">Coding</p>
      </div>

      <div className="resume-section">
        <span>Resume Based Interview (Optional)</span>
        <button className="upload-btn">Upload Resume</button>
      </div>

      <div className="options">
        <h4>Select Round *</h4>
        <div className="options-group">
          <button>Warm Up</button>
          <button className="active">Coding</button>
          <button>Role Related</button>
          <button>Behavioral</button>
        </div>

        <h4>Difficulty Level *</h4>
        <div className="options-group">
          <button>Beginner</button>
          <button className="active">Professional</button>
        </div>

        <h4>Interview Duration *</h4>
        <div className="options-group">
          <button className="active">5 mins</button>
          <button>15 mins</button>
          <button>30 mins</button>
        </div>
      </div>

      <button className="start-btn" onClick={handleStart}>
        Start Practice
      </button>
    </div>
  );
};

export default InterviewDetails;
