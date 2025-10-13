import React, { Suspense } from "react";
import ApplicationStates from "./ApplicationStates";
import ApplicationLists from "./ApplicationLists";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationJobs } from "../../api/myApplicationJobs";

const MyApplications = () => {
  const { user } = UseAuth();
 
  const applicationsPromise = myApplicationJobs(user?.email);

  return (
    <div>
      <ApplicationStates />
      <Suspense fallback={"Loading your Applications..."}> 
        <ApplicationLists myApplicationJobs={applicationsPromise} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
