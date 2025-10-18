import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import { createJobByEmail } from "../../api/jobApi";
import JobLists from "./JobLists";

const PostMyJobs = () => {
  const { user } = UseAuth();

  const myJobPostPromise = createJobByEmail(user?.email)
console.log(myJobPostPromise)
  return (
    <div>
      <h3>Post My Jobs - {myJobPostPromise.length}</h3>
      <Suspense fallback={'Post are Loading.........'}>
        <JobLists myJobPostPromise={myJobPostPromise} />
      </Suspense>
    </div>
  );
};

export default PostMyJobs;
