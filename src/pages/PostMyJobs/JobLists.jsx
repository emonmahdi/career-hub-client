import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ myJobPostPromise }) => {
  // Suspense hook
  const jobs = use(myJobPostPromise);

  // Badge style based on status
  const getStatusBadge = (status) => {
    if (status === "active") return "badge-success";
    if (status === "closed") return "badge-error";
    return "badge-warning";
  };

  return (
    <div className="overflow-x-auto bg-base-100 shadow-lg rounded-lg mt-5">
      <table className="table table-zebra">
        {/* Table Head */}
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Status</th>
            <th>Applications</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {jobs?.length > 0 ? (
            jobs.map((job, index) => (
              <tr key={job._id} className="hover">
                <td>{index + 1}</td>

                <td className="flex items-center gap-3">
                  <img
                    src={job.company_logo}
                    alt={job.title}
                    className="w-10 h-10 rounded-md border"
                  />
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-xs opacity-70">{job.category}</p>
                  </div>
                </td>

                <td>{job.company}</td>
                <td>{job.location}</td>

                <td>
                  <span className={`badge ${getStatusBadge(job.status)}`}>
                    {job.status}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/applications/${job._id}`}
                    className="link link-primary"
                  >
                    View
                  </Link>
                </td>
                <td>{job.application_count}</td>

                <td className="flex gap-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    Edit
                  </button>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">
                No jobs posted yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobLists;
