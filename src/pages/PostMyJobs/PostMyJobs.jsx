import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import { createJobByEmail } from "../../api/jobApi";
import JobLists from "./JobLists";

const PostMyJobs = () => {
  const { user } = UseAuth();

  // Should be async fetched, not called directly like this - but keeping your structure
  const myJobPostPromise = createJobByEmail(user?.email);

  return (
    <div className="p-5 md:p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          My Job Posts
          <span className="text-primary">
            {" "}
            {/* ({myJobPostPromise?.length || 0}) */}
          </span>
        </h2>
        <button className="btn btn-primary btn-sm">+ Post New Job</button>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-48">
            <button className="btn btn-ghost loading text-primary text-lg">
              Loading jobs...
            </button>
          </div>
        }
      >
        <JobLists myJobPostPromise={myJobPostPromise} />
      </Suspense>
    </div>
  );
};

export default PostMyJobs;
