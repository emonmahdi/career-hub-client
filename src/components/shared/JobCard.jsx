// import React from "react";
// import { Link } from "react-router";

// const JobCard = ({ job }) => {
//   const {
//     _id,
//     title,
//     company,
//     company_logo,
//     location,
//     jobType,
//     category,
//     salaryRange,
//     applicationDeadline,
//     description,
//   } = job;
//   return (
//     <div
//       className="w-full bg-white shadow-md border rounded-2xl overflow-hidden
//       flex flex-col justify-between
//       transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//     >
//       {/* Company Section */}
//       <div className="flex items-center gap-4 p-4 border-b">
//         <img
//           src={company_logo}
//           alt={company}
//           className="w-14 h-14 rounded-xl object-cover border"
//         />
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
//           <p className="text-sm text-gray-500">{location}</p>
//         </div>
//       </div>

//       {/* Job Info Section */}
//       <div className="p-4 flex flex-col flex-grow">
//         <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center flex-wrap gap-2">
//           {title}
//           <span className="badge badge-secondary">{jobType}</span>
//         </h2>

//         <p className="text-gray-600 text-sm line-clamp-3 mb-3">{description}</p>

//         <div className="flex flex-wrap gap-2 mb-3">
//           <span className="badge badge-outline text-blue-600 border-blue-300">
//             {category}
//           </span>
//           <span className="badge badge-outline text-green-600 border-green-300">
//             {location}
//           </span>
//         </div>

//         <p className="text-sm text-gray-700 font-medium">
//           💰 {salaryRange.min.toLocaleString()} -{" "}
//           {salaryRange.max.toLocaleString()}{" "}
//           {salaryRange.currency.toUpperCase()}
//         </p>
//         <p className="text-xs text-gray-500 mt-1">
//           📅 Apply before: {applicationDeadline}
//         </p>
//       </div>

//       {/* Footer Section */}
//       <div className="p-4 border-t mt-auto">
//         <Link to={`/jobs/${_id}`}>
//           <button
//             className="btn btn-sm w-full bg-blue-600 hover:bg-blue-700 text-white
//           rounded-lg transition-colors duration-200"
//           >
//             View Details
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
import React from "react";
import { Link } from "react-router";
import {
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

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
    experience,
    // postedDate,
    remote,
    skills,
    applicationDeadline,
  } = job;

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-teal-500 transition-all duration-300 overflow-hidden group">
      {/* Company Info */}
      <div className="p-5 flex items-center gap-4 border-b bg-gray-50">
        <img
          src={company_logo}
          alt={company}
          className="w-14 h-14 rounded-lg object-cover border border-gray-200 group-hover:scale-105 transition-transform"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FiMapPin className="text-teal-600" /> {location}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition">
          {title}
        </h2>

        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-sm flex items-center gap-1">
            <FiBriefcase /> {jobType}
          </span>
          {remote && (
            <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm">
              Remote
            </span>
          )}
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {category}
          </span>
        </div>

        <p className="text-gray-700 text-sm flex items-center gap-2">
          <FiDollarSign className="text-green-600" />
          {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}
        </p>

        {experience && (
          <p className="text-gray-700 text-sm flex items-center gap-2">
            <FiTrendingUp className="text-orange-500" /> Experience:{" "}
            {experience}
          </p>
        )}

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FiClock /> Deadline: {applicationDeadline}
        </p>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 hover:bg-teal-50 hover:text-teal-600 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-5 border-t bg-gray-50">
        <Link to={`/jobs/${_id}`}>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
