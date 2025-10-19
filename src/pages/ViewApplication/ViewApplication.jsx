import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const statusColors = {
  Pending: "badge-warning",
  Interview: "badge-info",
  Hired: "badge-success",
  Rejected: "badge-error",
};

const ViewApplication = () => {
  const { job_id } = useParams();
  const loadedApplications = useLoaderData();
  const [applications, setApplications] = useState(loadedApplications);

  const handleStatusUpdate = (e, app_id) => {
    const newStatus = e.target.value;

    axios
      .patch(`http://localhost:5000/applications/${app_id}`, {
        status: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Status updated to "${newStatus}"`,
            showConfirmButton: false,
            timer: 1500,
          });

          // Update UI instantly
          const updatedApps = applications.map((app) =>
            app._id === app_id ? { ...app, status: newStatus } : app
          );
          setApplications(updatedApps);
        }
      })
      .catch((err) => console.log(err));
  };

  if (!applications?.length) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <h2 className="text-xl font-semibold">No Applications Found</h2>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10">
      <h2 className="text-2xl font-bold mb-5">
        Applications for Job ID: <span className="text-primary">{job_id}</span>
      </h2>
      <div className="overflow-x-auto bg-base-100 shadow-lg rounded-xl">
        <table className="table">
          <thead className="bg-base-200 text-base">
            <tr>
              <th>#</th>
              <th>Applicant</th>
              <th>LinkedIn</th>
              <th>GitHub</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id} className="hover:bg-base-200">
                <td>{index + 1}</td>
                <td>{app.applicant}</td>
                <td>
                  <a
                    href={app.linkedin}
                    target="_blank"
                    className="link link-primary"
                  >
                    LinkedIn
                  </a>
                </td>
                <td>
                  <a
                    href={app.github}
                    target="_blank"
                    className="link link-secondary"
                  >
                    GitHub
                  </a>
                </td>
                <td>
                  <a
                    href={app.resume}
                    target="_blank"
                    className="link link-accent"
                  >
                    Resume
                  </a>
                </td>
                <td>
                  <div className={`badge ${statusColors[app.status]}`}>
                    {app.status}
                  </div>
                </td>
                <td>
                  <select
                    defaultValue={app?.status}
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    className="select select-bordered select-sm w-full"
                  >
                    <option disabled>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
