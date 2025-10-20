// import axios from "axios";
// import React from "react";
// import Swal from "sweetalert2";
// import UseAuth from "../../hooks/UseAuth";

// const AddJob = () => {
//   const { user } = UseAuth();

//   // Submit Function
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     // salary object
//     const { max, min, currency, ...newJob } = data;
//     newJob.salaryRange = { min, max, currency };

//     // requirements & responsibilities array format
//     newJob.requirements = newJob.requirements
//       .split(",")
//       .map((req) => req.trim());
//     newJob.responsibilities = newJob.responsibilities
//       .split(",")
//       .map((res) => res.trim());

//     newJob.status = "active";
//     console.log(newJob);

//     // save the database newJob
//     axios
//       .post("http://localhost:5000/jobs", newJob)
//       .then((res) => {
//         console.log(res);
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your Job Add successfully done",
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
//     <div className="flex justify-center items-center py-10 px-4">
//       <div className="card w-full max-w-4xl shadow-lg border bg-base-100">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center text-primary mb-6">
//             Add New Job
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* Job Title */}
//             <div className="form-control">
//               <label className="label font-semibold">Job Title</label>
//               <input
//                 name="title"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="Software Engineer"
//                 required
//               />
//             </div>

//             {/* Company */}
//             <div className="form-control">
//               <label className="label font-semibold">Company Name</label>
//               <input
//                 name="company"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="Favorite IT"
//                 required
//               />
//             </div>

//             {/* Company Logo */}
//             <div className="form-control">
//               <label className="label font-semibold">Company Logo URL</label>
//               <input
//                 name="company_logo"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="https://logo.com/logo.png"
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div className="form-control">
//               <label className="label font-semibold">Location</label>
//               <input
//                 name="location"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="City, Country"
//                 required
//               />
//             </div>

//             {/* Job Type */}
//             <div className="form-control">
//               <label className="label font-semibold">Job Type</label>
//               <select
//                 name="jobType"
//                 className="select select-bordered w-full"
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Onsite">Onsite</option>
//                 <option value="Remote">Remote</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>
//             </div>

//             {/* Category */}
//             <div className="form-control">
//               <label className="label font-semibold">Category</label>
//               <input
//                 name="category"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="Engineering"
//                 required
//               />
//             </div>

//             {/* Application Deadline */}
//             <div className="form-control">
//               <label className="label font-semibold">
//                 Application Deadline
//               </label>
//               <input
//                 name="applicationDeadline"
//                 type="date"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>

//             {/* Salary */}
//             <div className="form-control">
//               <label className="label font-semibold">Salary Range</label>
//               <div className="flex gap-2">
//                 <input
//                   name="min"
//                   type="number"
//                   className="input input-bordered w-full"
//                   placeholder="Min"
//                   required
//                 />
//                 <input
//                   name="max"
//                   type="number"
//                   className="input input-bordered w-full"
//                   placeholder="Max"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Currency */}
//             <div className="form-control">
//               <label className="label font-semibold">Currency</label>
//               <select name="currency" className="select select-bordered w-full">
//                 <option value="BDT">BDT</option>
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//               </select>
//             </div>

//             {/* HR Name */}
//             <div className="form-control">
//               <label className="label font-semibold">HR Name</label>
//               <input
//                 name="hr_name"
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="Farhan Rahman"
//                 required
//               />
//             </div>

//             {/* HR Email */}
//             <div className="form-control">
//               <label className="label font-semibold">HR Email</label>
//               <input
//                 name="hr_email"
//                 type="email"
//                 defaultValue={user?.email}
//                 readOnly
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>

//             {/* Requirements */}
//             <div className="form-control md:col-span-2">
//               <label className="label font-semibold">Requirements</label>
//               <textarea
//                 name="requirements"
//                 className="textarea textarea-bordered"
//                 placeholder="JavaScript, React, Node.js"
//                 required
//               />
//             </div>

//             {/* Responsibilities */}
//             <div className="form-control md:col-span-2">
//               <label className="label font-semibold">Responsibilities</label>
//               <textarea
//                 name="responsibilities"
//                 className="textarea textarea-bordered"
//                 placeholder="Write job responsibilities..."
//                 required
//               />
//             </div>

//             {/* Description */}
//             <div className="form-control md:col-span-2">
//               <label className="label font-semibold">Job Description</label>
//               <textarea
//                 name="description"
//                 className="textarea textarea-bordered"
//                 placeholder="Write job description..."
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="md:col-span-2">
//               <button type="submit" className="btn btn-primary w-full">
//                 Submit Job
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddJob;
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { max, min, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(",").map((i) => i.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((i) => i.trim());
    newJob.status = "active";

    try {
      const res = await axios.post("http://localhost:5000/jobs", newJob);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Job Added Successfully!",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Job",
        text: "Something went wrong. Try again.",
      });
    }
    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-center text-primary mb-8">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Job Information */}
          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 pl-2 border-primary">
              Job Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="title"
                type="text"
                placeholder="Job Title"
                required
                className="input input-bordered w-full"
              />
              <input
                name="company"
                type="text"
                placeholder="Company Name"
                required
                className="input input-bordered w-full"
              />
              <input
                name="company_logo"
                type="url"
                placeholder="Company Logo URL"
                required
                className="input input-bordered w-full"
              />
              <input
                name="location"
                type="text"
                placeholder="Location"
                required
                className="input input-bordered w-full"
              />
              <select
                name="jobType"
                required
                className="select select-bordered w-full"
              >
                <option value="">Select Job Type</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <input
                name="category"
                type="text"
                placeholder="Job Category"
                required
                className="input input-bordered w-full"
              />
              <input
                name="applicationDeadline"
                type="date"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Salary Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 pl-2 border-primary">
              Salary Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                name="min"
                type="number"
                placeholder="Minimum Salary"
                required
                className="input input-bordered w-full"
              />
              <input
                name="max"
                type="number"
                placeholder="Maximum Salary"
                required
                className="input input-bordered w-full"
              />
              <select name="currency" className="select select-bordered w-full">
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          {/* HR Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 pl-2 border-primary">
              HR Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="hr_name"
                type="text"
                placeholder="HR Name"
                required
                className="input input-bordered w-full"
              />
              <input
                name="hr_email"
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 pl-2 border-primary">
              Job Description
            </h3>
            <textarea
              name="requirements"
              placeholder="Requirements (comma separated)"
              className="textarea textarea-bordered w-full h-24 mb-4"
              required
            />
            <textarea
              name="responsibilities"
              placeholder="Responsibilities (comma separated)"
              className="textarea textarea-bordered w-full h-24 mb-4"
              required
            />
            <textarea
              name="description"
              placeholder="Job Description"
              className="textarea textarea-bordered w-full h-32 mb-4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Job"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddJob;
