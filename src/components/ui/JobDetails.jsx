// import React from "react";
// import { Link, useLoaderData } from "react-router";

// const JobDetails = () => {
//   const job = useLoaderData();

//   if (!job)
//     return <p className="text-center mt-10 text-gray-500">Loading...</p>;

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
//     requirements,
//     responsibilities,
//     hr_email,
//     hr_name,
//   } = job;

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-2xl mt-10 border">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
//         <img
//           src={company_logo}
//           alt={company}
//           className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border"
//         />
//         <div className="flex-1 text-center sm:text-left">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//             {title}
//           </h1>
//           <p className="text-gray-600">{company}</p>
//           <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
//             <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
//               {jobType}
//             </span>
//             <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
//               {category}
//             </span>
//             <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 font-medium">
//               📍 {location}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//           Job Description
//         </h2>
//         <p className="text-gray-700 leading-relaxed">{description}</p>
//       </div>

//       {/* Salary & Deadline */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
//         <div>
//           <p className="text-gray-500 text-sm">💰 Salary Range</p>
//           <p className="font-semibold text-gray-800">
//             {salaryRange?.min.toLocaleString()} -{" "}
//             {salaryRange?.max.toLocaleString()}{" "}
//             {salaryRange?.currency?.toUpperCase()}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 text-sm">📅 Application Deadline</p>
//           <p className="font-semibold text-gray-800">{applicationDeadline}</p>
//         </div>
//       </div>

//       {/* Requirements */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//           Requirements
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-1">
//           {requirements?.map((req, index) => (
//             <li key={index}>{req}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Responsibilities */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//           Responsibilities
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-1">
//           {responsibilities?.map((res, index) => (
//             <li key={index}>{res}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact Info */}
//       <div className="mt-10 bg-blue-50 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">HR Contact</h3>
//           <p className="text-gray-700">
//             {hr_name} –{" "}
//             <a
//               href={`mailto:${hr_email}`}
//               className="text-blue-600 hover:underline"
//             >
//               {hr_email}
//             </a>
//           </p>
//         </div>

//         <Link to={`/jobApply/${_id}`} className="mt-4 sm:mt-0">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
//             Apply Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;
import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FiMapPin,
  FiBriefcase,
  FiMail,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const JobDetails = () => {
  const job = useLoaderData();

  if (!job)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

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
    requirements,
    responsibilities,
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white shadow-xl rounded-2xl mt-10 border border-gray-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-24 h-24 rounded-xl object-cover border shadow-sm"
        />
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-600 mt-1">{company}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
            <span className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium flex items-center gap-2">
              <FiBriefcase /> {jobType}
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-teal-100 text-teal-700 font-medium">
              {category}
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-gray-200 text-gray-700 font-medium flex items-center gap-2">
              <FiMapPin /> {location}
            </span>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          About the Job
        </h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </section>

      {/* Salary & Deadline Info */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 rounded-xl p-6 border">
        <div className="flex items-center gap-3">
          <FiDollarSign className="text-green-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Salary Range</p>
            <p className="font-semibold text-gray-800">
              {salaryRange?.min.toLocaleString()} -{" "}
              {salaryRange?.max.toLocaleString()}{" "}
              {salaryRange?.currency?.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiClock className="text-red-500 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Application Deadline</p>
            <p className="font-semibold text-gray-800">{applicationDeadline}</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Requirements
        </h2>
        <ul className="space-y-2">
          {requirements?.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <FiCheckCircle className="text-teal-600 mt-1" />
              {req}
            </li>
          ))}
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Responsibilities
        </h2>
        <ul className="space-y-2">
          {responsibilities?.map((res, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <FiCheckCircle className="text-blue-600 mt-1" />
              {res}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact & Apply */}
      <section className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact HR</h3>
          <p className="text-gray-700 flex items-center gap-2 mt-1">
            <FiMail className="text-blue-600" /> {hr_name} —{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-blue-700 font-medium hover:underline"
            >
              {hr_email}
            </a>
          </p>
        </div>

        <Link to={`/jobApply/${_id}`} className="w-full sm:w-auto">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition w-full sm:w-auto cursor-pointer">
            Apply Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default JobDetails;
