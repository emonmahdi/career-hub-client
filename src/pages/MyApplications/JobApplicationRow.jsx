import React from "react";

const JobApplicationRow = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    salaryRange,
    applicationDeadline,
  } = job;

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      {/* Checkbox */}
      <td className="px-4 py-3">
        <input
          type="checkbox"
          className="checkbox checkbox-sm checkbox-primary"
        />
      </td>

      {/* Job Info */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border">
            <img
              src={company_logo}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </td>

      {/* Job Details */}
      <td className="px-4 py-3 text-gray-700">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">{location}</span>
          <span className="text-xs text-gray-500 capitalize">
            {jobType} • {category}
          </span>
        </div>
      </td>

      {/* Salary */}
      <td className="px-4 py-3 text-gray-700 font-medium">
        {salaryRange.min.toLocaleString()}–{salaryRange.max.toLocaleString()}{" "}
        <span className="text-xs uppercase text-gray-400">
          {salaryRange.currency}
        </span>
      </td>

      {/* Deadline */}
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            new Date(applicationDeadline) > new Date()
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {applicationDeadline}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3 text-right">
        <button className="text-red-500 hover:text-red-600 font-medium text-sm transition">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
