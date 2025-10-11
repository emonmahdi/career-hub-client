import React, { lazy, Suspense } from "react";
import Banner from "../../components/ui/Banner";
import HotJobs from "./HotJobs";

// lazy load
const HotJobsOptimize = lazy(() => import("./HotJobs"));

const Home = () => {
  return (
    <div className="mx-w-7xl">
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="ml-3 text-blue-600 font-medium">
              Loading hot jobs...
            </p>
          </div>
        }
      >
        <HotJobsOptimize />
      </Suspense>
    </div>
  );
};

export default Home;
