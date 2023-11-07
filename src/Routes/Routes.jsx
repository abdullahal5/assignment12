import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Alljobs from "../Pages/All-jobs/Alljobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import JobDetails from "../Pages/JobDetail/JobDetails";
import JobTableDetails from "../Pages/JobTableDetails/JobTableDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatedJOb from "../Components/UpdatedJob/UpdatedJOb";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddAJob></AddAJob>,
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>,
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobTableDetails/:id",
        element: (
          <PrivateRoute>
            <JobTableDetails></JobTableDetails>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/updatedJob/:id",
        element: <UpdatedJOb></UpdatedJOb>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myjobs/${params.id}`),
      },
    ],
  },
]);

export default router;
