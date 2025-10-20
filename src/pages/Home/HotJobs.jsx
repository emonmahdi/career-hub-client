// import React, { useEffect, useState }  from 'react'
// import JobCard from '../../components/shared/JobCard';

// const HotJobs = () => {
//     const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/jobs")
//       .then((res) => res.json())
//       .then((data) => setJobs(data));
//   }, []);
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           🔥 Hot Jobs Available ({jobs?.length})
//         </h2>

//         {/* Responsive Grid Layout */}
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
//           {jobs.map((job) => (
//             <JobCard key={job._id} job={job} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HotJobs
import React, { useEffect, useState } from "react";
import JobCard from "../../components/shared/JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          🚀 Featured & Hot Jobs
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Explore top job opportunities from leading companies
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobs;
