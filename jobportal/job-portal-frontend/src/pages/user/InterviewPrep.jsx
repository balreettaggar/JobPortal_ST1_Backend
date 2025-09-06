// import React from "react";
// import "./InterviewPrep.css";
// import { useNavigate } from "react-router-dom";

// const InterviewPrep = () => {
//   const navigate = useNavigate();

//   const handleStartPractice = () => {
//     const token = localStorage.getItem("token"); // check if logged in

//     if (token) {
//       navigate("/interview-details");
//     } else {
//       navigate("/login"); // redirect to login page if not logged in
//     }
//   };

//   return (
//     <div className="prep-card">
//       <h1 className="prep-title">Ready to Ace Your Next Interview?</h1>
//       <p className="prep-subtitle">
//         AI mock interviews with personalized practice and real-time analytics – everything on{" "}
//         <span className="brand">JobPortal</span>
//       </p>

//       <div className="prep-box">
//         <select className="prep-dropdown">
//           <option>Job</option>
//           <option>Software Engineer</option>
//           <option>Data Scientist</option>
//         </select>

//         <select className="prep-dropdown">
//           <option>Role</option>
//           <option>Frontend</option>
//           <option>Backend</option>
//         </select>

//         <select className="prep-dropdown">
//           <option>Type</option>
//           <option>Coding</option>
//           <option>Behavioral</option>
//         </select>
//       </div>

//       <button className="start-btn" onClick={handleStartPractice}>
//         START PRACTICE
//       </button>
//     </div>
//   );
// };

// export default InterviewPrep;








//Corrected code storing in mongoDB
import React, { useState } from "react";
import "./InterviewPrep.css";
import { useNavigate } from "react-router-dom";

const InterviewPrep = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("DSA");

  const handleStartPractice = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/interview-practice", { state: { category } }); // pass category
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="prep-card">
      <h1 className="prep-title">Choose Your Practice Category</h1>
      <p className="prep-subtitle">
        Select a category and start practicing tailored MCQs with{" "}
        <span className="brand">JobPortal</span>
      </p>

      <div className="prep-box">
        <select
          className="prep-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="DSA">DSA</option>
          <option value="Aptitude">Aptitude</option>
          <option value="System Design">System Design</option>
          <option value="Behavioral">Behavioral</option>
        </select>
      </div>

      <button className="start-btn" onClick={handleStartPractice}>
        START PRACTICE
      </button>
    </div>
  );
};

export default InterviewPrep;

