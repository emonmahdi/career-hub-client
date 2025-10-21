// import React from "react";
// import { Link, useParams } from "react-router";
// import UseAuth from "../../hooks/UseAuth";
// import axios from "axios";
// import Swal from "sweetalert2";

// const JobApply = () => {
//   const { id: jobId } = useParams();
//   const { user } = UseAuth();
//   console.log(user);

//   const handleJobApply = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const linkedin = form.linkedin.value;
//     const github = form.github.value;
//     const resume = form.resume.value;

//     const application = {
//       jobId,
//       applicant: user.email,
//       linkedin,
//       github,
//       resume,
//     };

//     // post fetch url
//     axios
//       .post("https://career-hub-server-nu.vercel.app/application", application)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your Application has been submitted",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//         e.target.reset();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="text-center">
//       <form onSubmit={handleJobApply} className="w-100 mx-auto py-6">
//         <h2 className="my-2">
//           Job Apply for{" "}
//           <Link to={`/jobs/${jobId}`} className="btn">
//             Details
//           </Link>{" "}
//         </h2>
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//           <label className="label">LinkedIn Link</label>
//           <input
//             type="url"
//             name="linkedin"
//             className="input"
//             placeholder="LinkedIn Link"
//           />

//           <label className="label">Github Link</label>
//           <input
//             type="url"
//             name="github"
//             className="input"
//             placeholder="Github Link"
//           />

//           <label className="label">Resume Link</label>
//           <input
//             type="url"
//             name="resume"
//             className="input"
//             placeholder="Resume Link"
//           />
//         </fieldset>
//         <input type="submit" className="btn text-center mt-4" value={"Apply"} />
//       </form>
//     </div>
//   );
// };

// export default JobApply;
import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FiExternalLink } from "react-icons/fi";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  const handleJobApply = (e) => {
    e.preventDefault();
    const linkedin = e.target.linkedin.value;
    const github = e.target.github.value;
    const resume = e.target.resume.value;

    const application = {
      jobId,
      applicant: user?.email,
      linkedin,
      github,
      resume,
    };

    axios
      .post("https://career-hub-server-nu.vercel.app/application", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Application Submitted",
            text: "Your job application has been successfully submitted!",
            timer: 2000,
            showConfirmButton: false,
          });
        }
        e.target.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Apply for this Job
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Please provide your professional links below
        </p>

        {/* Job Link */}
        <div className="text-center mt-3 mb-6">
          <Link
            to={`/jobs/${jobId}`}
            className="text-blue-600 inline-flex items-center gap-1 hover:underline"
          >
            View Job Details <FiExternalLink />
          </Link>
        </div>

        <form onSubmit={handleJobApply} className="space-y-5">
          {/* LinkedIn */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn Profile <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="linkedin"
              required
              placeholder="https://linkedin.com/in/yourprofile"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/username"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Resume */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Resume Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="resume"
              required
              placeholder="https://drive.google.com/resume"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg rounded-md shadow-md transition-all"
          >
            Submit Application
          </button>
        </form>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          ⚠ Please double check your links before submission.
        </p>
      </div>
    </div>
  );
};

export default JobApply;
