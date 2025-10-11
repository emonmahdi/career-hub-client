import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    salaryRange,
    applicationDeadline,
    description,
  } = job;
  return (
    <div
      className="w-full bg-white shadow-md border rounded-2xl overflow-hidden 
      flex flex-col justify-between 
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Company Section */}
      <div className="flex items-center gap-4 p-4 border-b">
        <img
          src={company_logo}
          alt={company}
          className="w-14 h-14 rounded-xl object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Job Info Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center flex-wrap gap-2">
          {title}
          <span className="badge badge-secondary">{jobType}</span>
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="badge badge-outline text-blue-600 border-blue-300">
            {category}
          </span>
          <span className="badge badge-outline text-green-600 border-green-300">
            {location}
          </span>
        </div>

        <p className="text-sm text-gray-700 font-medium">
          💰 {salaryRange.min.toLocaleString()} -{" "}
          {salaryRange.max.toLocaleString()}{" "}
          {salaryRange.currency.toUpperCase()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          📅 Apply before: {applicationDeadline}
        </p>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t mt-auto">
        <Link to={`/jobs/${_id}`}>
          <button
            className="btn btn-sm w-full bg-blue-600 hover:bg-blue-700 text-white 
          rounded-lg transition-colors duration-200"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
