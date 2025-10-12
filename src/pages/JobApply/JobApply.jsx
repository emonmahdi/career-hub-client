import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(user);

  const handleJobApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    // post fetch url
    axios
      .post("http://localhost:5000/application", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been submitted",
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
    <div className="text-center">
      <form onSubmit={handleJobApply} className="w-100 mx-auto py-6">
        <h2 className="my-2">
          Job Apply for{" "}
          <Link to={`/jobs/${jobId}`} className="btn">
            Details
          </Link>{" "}
        </h2>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="LinkedIn Link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />
        </fieldset>
        <input type="submit" className="btn text-center mt-4" value={"Apply"} />
      </form>
    </div>
  );
};

export default JobApply;
