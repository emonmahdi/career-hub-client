import React from "react";

const AddJob = () => { 
  

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const {max, min, currency, ...newJob} = data;
    newJob.salaryRange = {max, min, currency};
    // console.log(newJob)

    // requirements sorting
    const requirementsString = newJob.requirements;
    const requirementsSplit = requirementsString.split(',');
    const requirementsClean = requirementsSplit.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    console.log(newJob)
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="card w-full max-w-4xl shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Job</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input name="title" type="text" placeholder="Job Title" className="input input-bordered w-full" required />

            <input name="company" type="text" placeholder="Company Name" className="input input-bordered w-full" required />

            <input name="company_logo" type="text" placeholder="Company Logo URL" className="input input-bordered w-full" required />

            <input name="location" type="text" placeholder="Job Location" className="input input-bordered w-full" required />

            <select name="jobType" className="select select-bordered w-full" required>
              <option value="">Job Type</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" required />

            <input name="applicationDeadline" type="date" className="input input-bordered w-full" required />

            <div className="flex gap-2">
              <input name="min" type="number" placeholder="Min Salary" className="input input-bordered w-full" required />
              <input name="max" type="number" placeholder="Max Salary" className="input input-bordered w-full" required />
            </div>

            <select name="currency" className="select select-bordered w-full">
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            <input name="hr_name" type="text" placeholder="HR Name" className="input input-bordered w-full" required />

            <input name="hr_email" type="email" placeholder="HR Email" className="input input-bordered w-full" required />

            <textarea name="requirements" className="textarea textarea-bordered md:col-span-2" placeholder="Requirements (comma separated)" />

            <textarea name="responsibilities" className="textarea textarea-bordered md:col-span-2" placeholder="Responsibilities (comma separated)" />

            <textarea name="description" className="textarea textarea-bordered md:col-span-2" placeholder="Job Description" required />

            <select name="status" className="select select-bordered w-full md:col-span-2">
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>

            <button type="submit" className="btn btn-primary md:col-span-2">Submit Job</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
