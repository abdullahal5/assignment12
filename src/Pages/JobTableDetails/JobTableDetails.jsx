import { useLoaderData } from "react-router-dom";

const JobTableDetails = () => {
    const data = useLoaderData()
    console.log(data)
        const { _id, photo, name, title, date, deadline, salary , applicants, description} = data;

    return (
      <div>
        <h1 className="text-3xl text-center my-5">
          <span className="text-[#00B0FF]">Apply</span> this Job
        </h1>
        <img className="mx-auto " src={photo} alt="" />
        <div className="px-10">
          <div className="card border border-[#00B0FF] lg:card-side bg-base-200 shadow-xl">
            <div className="card-body">
              <img
                className="w-24"
                src="https://i.ibb.co/ZS4CdBG/370267382-3049849525148107-486017350057683538-n-removebg-preview.png"
                alt=""
              />
              <h2 className="card-title">Job Title:{title}</h2>
              <div>
                <h1>Salary Range: {salary}</h1>
                <h1>Job Applicants Number: {applicants}</h1>
              </div>
              <p>Description: {description}</p>
              <div className="card-actions justify-end">
                <button className="btn text-white font-bold bg-[#00B0FF]">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobTableDetails;