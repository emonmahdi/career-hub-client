import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationLists = ({ myApplicationJobs }) => {
  const applications = use(myApplicationJobs);

  return (
    <section className="flex justify-center items-center py-10 px-4 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            My Applications
          </h2>
          <p className="text-sm text-gray-500">
            You have applied to{" "}
            <span className="font-semibold text-gray-700">
              {applications.length}
            </span>{" "}
            jobs.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="table w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary"
                  />
                </th>
                <th className="px-4 py-3">Job Info</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3">Salary</th>
                <th className="px-4 py-3">Deadline</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.length > 0 ? (
                applications.map((job) => (
                  <JobApplicationRow key={job._id} job={job} />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500 text-sm"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApplicationLists;
