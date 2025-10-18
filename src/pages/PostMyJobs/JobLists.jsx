import React, { use } from 'react'
import { Link } from 'react-router';

const JobLists = ({myJobPostPromise}) => {
    const jobs = use(myJobPostPromise);
    console.log(jobs)
  return (
    <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => <tr key={job.id}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>
                <Link to={`/applications/${job._id}`}>View</Link>
              </td>
            </tr> )}
            
          </tbody>
        </table>
      </div>
  )
}

export default JobLists