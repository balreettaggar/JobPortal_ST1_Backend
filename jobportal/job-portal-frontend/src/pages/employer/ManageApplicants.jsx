import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageApplicants({ jobId }) {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await axios.get(`http://localhost:5000/api/applications/job/${jobId}`);
      setApplicants(res.data);
    };
    fetchApplicants();
  }, [jobId]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>👥 Manage Applicants</h1>
      {applicants.length === 0 ? (
        <p>No applicants yet.</p>
      ) : (
        <table style={{ margin: "20px auto", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Resume</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map(app => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>
                  <a href={`http://localhost:5000/api/applications/resume/${app.resumeId}`} target="_blank" rel="noreferrer">View Resume</a>
                </td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
