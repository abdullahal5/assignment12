import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
      <div>
        <Helmet>
          <title>CareerCanvas | Job Details</title>
        </Helmet>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center bg-slate-200 my-10">
        <div className="flex-1">
          <img className="w-96" src={data.photo} alt="" />
        </div>
        <div className="flex-1 my-5">
          <h1 className="text-2xl">Title: {data.title}</h1>
          <h2 className="text-xl">Category: {data.categrory}</h2>
          <h2 className="text-xl">Name: {data.name}</h2>
          <h3 className="text-xl">Salary: {data.salary}</h3>
          <p className="text-xl">Description: {data.description}</p>
        </div>
      </div>
      </div>
    );
};

export default JobDetails;