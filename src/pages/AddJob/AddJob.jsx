import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth();

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // salary object
    const { max, min, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // requirements & responsibilities array format
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";
    console.log(newJob);

    // save the database newJob
    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job Add successfully done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="card w-full max-w-4xl shadow-lg border bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Add New Job
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Job Title */}
            <div className="form-control">
              <label className="label font-semibold">Job Title</label>
              <input
                name="title"
                type="text"
                className="input input-bordered w-full"
                placeholder="Software Engineer"
                required
              />
            </div>

            {/* Company */}
            <div className="form-control">
              <label className="label font-semibold">Company Name</label>
              <input
                name="company"
                type="text"
                className="input input-bordered w-full"
                placeholder="Favorite IT"
                required
              />
            </div>

            {/* Company Logo */}
            <div className="form-control">
              <label className="label font-semibold">Company Logo URL</label>
              <input
                name="company_logo"
                type="text"
                className="input input-bordered w-full"
                placeholder="https://logo.com/logo.png"
                required
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label font-semibold">Location</label>
              <input
                name="location"
                type="text"
                className="input input-bordered w-full"
                placeholder="City, Country"
                required
              />
            </div>

            {/* Job Type */}
            <div className="form-control">
              <label className="label font-semibold">Job Type</label>
              <select
                name="jobType"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Type</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <input
                name="category"
                type="text"
                className="input input-bordered w-full"
                placeholder="Engineering"
                required
              />
            </div>

            {/* Application Deadline */}
            <div className="form-control">
              <label className="label font-semibold">
                Application Deadline
              </label>
              <input
                name="applicationDeadline"
                type="date"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Salary */}
            <div className="form-control">
              <label className="label font-semibold">Salary Range</label>
              <div className="flex gap-2">
                <input
                  name="min"
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Min"
                  required
                />
                <input
                  name="max"
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Max"
                  required
                />
              </div>
            </div>

            {/* Currency */}
            <div className="form-control">
              <label className="label font-semibold">Currency</label>
              <select name="currency" className="select select-bordered w-full">
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            {/* HR Name */}
            <div className="form-control">
              <label className="label font-semibold">HR Name</label>
              <input
                name="hr_name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Farhan Rahman"
                required
              />
            </div>

            {/* HR Email */}
            <div className="form-control">
              <label className="label font-semibold">HR Email</label>
              <input
                name="hr_email"
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Requirements */}
            <div className="form-control md:col-span-2">
              <label className="label font-semibold">Requirements</label>
              <textarea
                name="requirements"
                className="textarea textarea-bordered"
                placeholder="JavaScript, React, Node.js"
                required
              />
            </div>

            {/* Responsibilities */}
            <div className="form-control md:col-span-2">
              <label className="label font-semibold">Responsibilities</label>
              <textarea
                name="responsibilities"
                className="textarea textarea-bordered"
                placeholder="Write job responsibilities..."
                required
              />
            </div>

            {/* Description */}
            <div className="form-control md:col-span-2">
              <label className="label font-semibold">Job Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Write job description..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button type="submit" className="btn btn-primary w-full">
                Submit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
