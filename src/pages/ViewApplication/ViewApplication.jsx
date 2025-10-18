import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusUpdate = (e, app_id) => {
    console.log(e.target.value, app_id);

    // patch status
    axios
      .patch(`http://localhost:5000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Status Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {" "}
      {applications.length} - View Application - {job_id}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((app, index) => {
              console.log(app);
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{app.applicant}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      defaultValue={app?.status}
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      className="select select-ghost"
                    >
                      <option disabled={true}>Update Status</option>
                      <option>Pending</option>
                      <option>Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
