// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ManageApplicants({ jobId }) {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       const res = await axios.get(`http://localhost:5000/api/applications/job/${jobId}`);
//       setApplicants(res.data);
//     };
//     fetchApplicants();
//   }, [jobId]);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>👥 Manage Applicants</h1>
//       {applicants.length === 0 ? (
//         <p>No applicants yet.</p>
//       ) : (
//         <table style={{ margin: "20px auto", border: "1px solid black" }}>
//           <thead>
//             <tr>
//               <th>Name</th><th>Email</th><th>Phone</th><th>Resume</th><th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map(app => (
//               <tr key={app.id}>
//                 <td>{app.name}</td>
//                 <td>{app.email}</td>
//                 <td>{app.phone}</td>
//                 <td>
//                   <a href={`http://localhost:5000/api/applications/resume/${app.resumeId}`} target="_blank" rel="noreferrer">View Resume</a>
//                 </td>
//                 <td>{app.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// 19 Sept 

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ManageApplicants({ jobId }) {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/applications/job/${jobId}`);
//         setApplicants(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching applicants:", err);
//         setApplicants([]);
//       }
//     };
//     fetchApplicants();
//   }, [jobId]);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>👥 Manage Applicants</h1>
//       {applicants.length === 0 ? (
//         <p>No applicants yet.</p>
//       ) : (
//         <table style={{ margin: "20px auto", border: "1px solid black" }}>
//           <thead>
//             <tr>
//               <th>Name</th><th>Email</th><th>Phone</th><th>Resume</th><th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map(app => (
//               <tr key={app.id}>
//                 <td>{app.name}</td>
//                 <td>{app.email}</td>
//                 <td>{app.phone}</td>
//                 <td>
//                   {app.resumeFilename ? (
//                     <a
//                       href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {app.resumeFilename}
//                     </a>
//                   ) : (
//                     "No Resume"
//                   )}
//                 </td>
//                 <td>{app.status || "Pending"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ManageApplicants({ jobId }) {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/applications/job/${jobId}`);
//         setApplicants(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching applicants:", err);
//         setApplicants([]);
//       }
//     };
//     fetchApplicants();
//   }, [jobId]);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>👥 Manage Applicants</h1>
//       {applicants.length === 0 ? (
//         <p>No applicants yet.</p>
//       ) : (
//         <table style={{ margin: "20px auto", border: "1px solid black" }}>
//           <thead>
//             <tr>
//               <th>Name</th><th>Email</th><th>Phone</th><th>Resume</th><th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map(app => (
//               <tr key={app.id}>
//                 <td>{app.name}</td>
//                 <td>{app.email}</td>
//                 <td>{app.phone}</td>
//                 <td>
//                   {app.resumeFilename ? (
//                     <a
//                       href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {app.resumeFilename}
//                     </a>
//                   ) : (
//                     "No Resume"
//                   )}
//                 </td>
//                 <td>{app.status || "Pending"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ManageApplicants() {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/applications");
//         setApplicants(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching applicants:", err);
//         setApplicants([]);
//       }
//     };
//     fetchApplicants();
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>👥 Manage Applicants</h1>
//       {applicants.length === 0 ? (
//         <p>No applicants yet.</p>
//       ) : (
//         <table
//           style={{
//             margin: "20px auto",
//             border: "1px solid black",
//             borderCollapse: "collapse",
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Phone</th>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Resume</th>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Status</th>
//               <th style={{ border: "1px solid black", padding: "8px" }}>Job ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map((app) => (
//               <tr key={app.id}>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.name}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.email}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.phone}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.resumeFilename ? (
//                     <a
//                       href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {app.resumeFilename}
//                     </a>
//                   ) : (
//                     "No Resume"
//                   )}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.status || "Pending"}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "8px" }}>
//                   {app.jobId}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageApplicants.css"; // Import the CSS file

// export default function ManageApplicants() {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/applications");
//         setApplicants(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching applicants:", err);
//         setApplicants([]);
//       }
//     };
//     fetchApplicants();
//   }, []);

//   return (
//     <div className="manage-container">
//       <div className="background"></div>
//       <div className="content-box">
//         <h1 className="title">👥 Manage Applicants</h1>
//         {applicants.length === 0 ? (
//           <p className="no-data">No applicants yet.</p>
//         ) : (
//           <div className="table-wrapper">
//             <table className="applicants-table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Resume</th>
//                   <th>Status</th>
//                   <th>Job ID</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applicants.map((app) => (
//                   <tr key={app.id}>
//                     <td>{app.name}</td>
//                     <td>{app.email}</td>
//                     <td>{app.phone}</td>
//                     <td>
//                       {app.resumeFilename ? (
//                         <a
//                           href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {app.resumeFilename}
//                         </a>
//                       ) : (
//                         "No Resume"
//                       )}
//                     </td>
//                     <td>{app.status || "Pending"}</td>
//                     <td>{app.jobId}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageApplicants.css"; // Import the CSS file

// export default function ManageApplicants() {
//   const [applicants, setApplicants] = useState([]);

//   // Fetch all applicants
//   const fetchApplicants = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/applications");
//       setApplicants(res.data || []);
//     } catch (err) {
//       console.error("❌ Error fetching applicants:", err);
//       setApplicants([]);
//     }
//   };

//   useEffect(() => {
//     fetchApplicants();
//   }, []);

//   // Handle status update (accept/reject)
//   const handleStatusChange = async (id, status) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/applications/${id}/status`,
//         { status }
//       );

//       console.log("✅ Status updated response:", res.data);

//       // Update state immediately without full reload
//       setApplicants((prev) =>
//         prev.map((app) =>
//           app.id === id ? { ...app, status: res.data.application.status } : app
//         )
//       );
//     } catch (err) {
//       console.error("❌ Error updating status:", err);
//     }
//   };

//   return (
//     <div className="manage-container">
//       <div className="background"></div>
//       <div className="content-box">
//         <h1 className="title">👥 Manage Applicants</h1>
//         {applicants.length === 0 ? (
//           <p className="no-data">No applicants yet.</p>
//         ) : (
//           <div className="table-wrapper">
//             <table className="applicants-table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Resume</th>
//                   <th>Status</th>
//                   <th>Job ID</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applicants.map((app) => (
//                   <tr key={app.id}>
//                     <td>{app.name}</td>
//                     <td>{app.email}</td>
//                     <td>{app.phone}</td>
//                     <td>
//                       {app.resumeFilename ? (
//                         <a
//                           href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {app.resumeFilename}
//                         </a>
//                       ) : (
//                         "No Resume"
//                       )}
//                     </td>
//                     <td>{app.status || "pending"}</td>
//                     <td>{app.jobId}</td>
//                     <td>
//                       <button
//                         className="accept-btn"
//                         onClick={() => handleStatusChange(app.id, "accepted")}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         className="reject-btn"
//                         onClick={() => handleStatusChange(app.id, "rejected")}
//                       >
//                         Reject
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageApplicants.css"; // Import the CSS file

export default function ManageApplicants() {
  const [applicants, setApplicants] = useState([]);

  // Fetch all applicants
  const fetchApplicants = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/applications");
      setApplicants(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching applicants:", err);
      setApplicants([]);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  // Handle status update (accept/reject)
  const handleStatusChange = async (id, status) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/applications/${id}/status`,
        { status }
      );

      console.log("✅ Status updated response:", res.data);

      // Update state immediately
      setApplicants((prev) =>
        prev.map((app) =>
          app.id === id ? { ...app, status: res.data.application.status } : app
        )
      );
    } catch (err) {
      console.error("❌ Error updating status:", err);
    }
  };

  // Handle delete applicant
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/applications/${id}`);

      // Remove from state
      setApplicants((prev) => prev.filter((app) => app.id !== id));
    } catch (err) {
      console.error("❌ Error deleting applicant:", err);
    }
  };

  return (
    <div className="manage-container">
      <div className="background"></div>
      <div className="content-box">
        <h1 className="title">👥 Manage Applicants</h1>
        {applicants.length === 0 ? (
          <p className="no-data">No applicants yet.</p>
        ) : (
          <div className="table-wrapper">
            <table className="applicants-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Resume</th>
                  <th>Status</th>
                  <th>Job ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr key={app.id}>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>
                    <td>
                      {app.resumeFilename ? (
                        <a
                          href={`http://localhost:5000/api/applications/resume/${app.resumeId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {app.resumeFilename}
                        </a>
                      ) : (
                        "No Resume"
                      )}
                    </td>
                    <td>{app.status || "pending"}</td>
                    <td>{app.jobId}</td>
                    <td>
                      {app.status === "accepted" ? (
                        <span className="accepted-label">✔ Accepted</span>
                      ) : app.status === "rejected" ? (
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(app.id)}
                        >
                          Delete
                        </button>
                      ) : (
                        <>
                          <button
                            className="accept-btn"
                            onClick={() => handleStatusChange(app.id, "accepted")}
                          >
                            Accept
                          </button>
                          <button
                            className="reject-btn"
                            onClick={() => handleStatusChange(app.id, "rejected")}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

