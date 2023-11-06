import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Alljobs from "../Pages/All-jobs/Alljobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import JobData from "../Components/Jobdata/JobData";
import JobDetails from "../Pages/JobDetail/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <Alljobs></Alljobs>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/addajobs",
        element: <AddAJob></AddAJob>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/myjobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
