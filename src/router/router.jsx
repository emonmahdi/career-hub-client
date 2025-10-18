import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../components/ui/JobDetails";
import PrivateRouter from "../routes/PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import PostMyJobs from "../pages/PostMyJobs/PostMyJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/postMyJobs",
        element: (
          <PrivateRouter>
            <PostMyJobs />
          </PrivateRouter>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplication />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications/job/${params.job_id}`),
      },
    ],
  },
]);
