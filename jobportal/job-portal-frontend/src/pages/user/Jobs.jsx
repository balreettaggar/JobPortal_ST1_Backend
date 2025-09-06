// import React, { useState, useEffect } from "react";
// import "./Jobs.css";

// export default function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);

//   const [applicant, setApplicant] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null,
//   });

//   const [applying, setApplying] = useState(false);
//   const [applyError, setApplyError] = useState(null);
//   const [applySuccess, setApplySuccess] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         setJobs(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   const openModal = (job) => {
//     setSelectedJob(job);
//     setShowModal(true);
//     setApplicant({ name: "", email: "", phone: "", resume: null });
//     setApplyError(null);
//     setApplySuccess(null);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedJob(null);
//     setApplyError(null);
//     setApplySuccess(null);
//   };

//   // ✅ Fix: Add handleInputChange
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setApplicant({ ...applicant, resume: files[0] });
//     } else {
//       setApplicant({ ...applicant, [name]: value });
//     }
//   };

//   const handleApplySubmit = async (e) => {
//   e.preventDefault();
//   setApplying(true);

//   try {
//     const formData = new FormData();
//     formData.append("name", applicant.name);
//     formData.append("email", applicant.email);
//     formData.append("phone", applicant.phone);
//     formData.append("jobId", selectedJob?._id);
//     if (applicant.resume) {
//       formData.append("resume", applicant.resume);
//     }

//     const res = await fetch("http://localhost:5000/api/applications", {
//       method: "POST",
//       body: formData,
//     });

//     // ✅ Try parsing JSON safely
//     let data;
//     try {
//       data = await res.json();
//     } catch (err) {
//       throw new Error("Server did not return JSON. Did your backend crash?");
//     }

//     if (res.ok) {
//       setApplySuccess("Application submitted successfully!");
//     } else {
//       setApplyError(data.message || "Failed to submit application");
//     }
//   } catch (err) {
//     console.error("Error submitting application:", err);
//     setApplyError(err.message || "Something went wrong");
//   } finally {
//     setApplying(false);
//   }
// };

//   if (loading) return <div className="jobs-loading">Loading jobs...</div>;
//   if (error) return <div className="jobs-error">Error: {error}</div>;

//   return (
//     <div className="jobs-container">
//       <h1 className="jobs-title">💼 Available Jobs</h1>
//       {jobs.length === 0 ? (
//         <p className="no-jobs-msg">No jobs posted yet. Please check back later.</p>
//       ) : (
//         <div className="jobs-list">
//           {jobs.map((job) => (
//             <div key={job._id || job.id} className="job-card">
//               <h2 className="job-title">{job.title}</h2>
//               <p className="job-company-location">
//                 {job.company} &mdash; {job.location}
//               </p>
//               <p className="job-type-salary">
//                 <span>{job.jobType}</span>
//                 {job.salary && <span> | Salary: {job.salary}</span>}
//               </p>
//               <p className="job-skills">
//                 <strong>Skills:</strong> {job.skills || "Not specified"}
//               </p>
//               <p className="job-description">{job.description}</p>
//               <button className="apply-btn" onClick={() => openModal(job)}>
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {showModal && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Apply for {selectedJob.title}</h2>
//             <form
//               onSubmit={handleApplySubmit}
//               className="apply-form"
//               encType="multipart/form-data"
//             >
//               <label>
//                 Name<span className="required">*</span>
//                 <input
//                   type="text"
//                   name="name"
//                   value={applicant.name}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Your full name"
//                 />
//               </label>

//               <label>
//                 Email<span className="required">*</span>
//                 <input
//                   type="email"
//                   name="email"
//                   value={applicant.email}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Your email address"
//                 />
//               </label>

//               <label>
//                 Phone Number<span className="required">*</span>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={applicant.phone}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="e.g. +1 555 123 4567"
//                   pattern="^\+?[0-9\s\-]{7,15}$"
//                   title="Please enter a valid phone number"
//                 />
//               </label>

//               <label>
//                 Upload Resume<span className="required">*</span>
//                 <input
//                   type="file"
//                   name="resume"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               {applyError && <p className="apply-error">{applyError}</p>}
//               {applySuccess && <p className="apply-success">{applySuccess}</p>}

//               <div className="form-buttons">
//                 <button type="submit" disabled={applying}>
//                   {applying ? "Submitting..." : "Submit Application"}
//                 </button>
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



//Bhavisha
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [applicant, setApplicant] = useState({ name: "", email: "", phone: "", resume: null });
  const [applyStatus, setApplyStatus] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", applicant.name);
    formData.append("email", applicant.email);
    formData.append("phone", applicant.phone);
    console.log("Submitting application:", applicant, "JobId:", selectedJob?._id);
    formData.append("jobId", selectedJob._id);
    formData.append("resume", applicant.resume);

    try {
      const res = await axios.post("http://localhost:5000/api/applications", formData);
      setApplyStatus(res.data.message);
      setShowModal(false);
    } catch (err) {
      console.error(err);
      setApplyStatus("Failed to apply.");
    }
  };

  return (
    <div className="jobs-container">
      <h1>💼 Available Jobs</h1>
      {jobs.map(job => (
        <div key={job._id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.company} — {job.location}</p>
          <button onClick={() => { setSelectedJob(job); setShowModal(true); }}>Apply Now</button>
        </div>
      ))}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Apply for {selectedJob.title}</h2>
            <form onSubmit={handleApplySubmit} encType="multipart/form-data">
              <input type="text" placeholder="Name" required onChange={e => setApplicant({ ...applicant, name: e.target.value })} />
              <input type="email" placeholder="Email" required onChange={e => setApplicant({ ...applicant, email: e.target.value })} />
              <input type="tel" placeholder="Phone" required onChange={e => setApplicant({ ...applicant, phone: e.target.value })} />
              <input type="file" required onChange={e => setApplicant({ ...applicant, resume: e.target.files[0] })} />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {applyStatus && <p>{applyStatus}</p>}
    </div>
  );
}

