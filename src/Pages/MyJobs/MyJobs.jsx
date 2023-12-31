import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyJobTable from "../../Components/MyJobTable/MyJobTable";
// import UseMyJob from "../../Providers/UseMyJob";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const MyJobs = () => {
  const [newData, setNewData] = useState([]);
  const { user } = useContext(AuthContext);
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["myjobs"],
    queryFn: async () => {
      const dd = await fetch(
        `https://b8a11-server-side-abdullahal5.vercel.app/myjobs?email=${user?.email}`,
        {
          credentials: "include",
        }
      );
      return await dd.json();
    },
  });

  console.log(data);
  // const { data, isLoading, isFetching , refetch} = UseMyJob();
  // console.log(data, isLoading, isFetching)
  if (isLoading === true) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  //   useEffect(() => {
  //     const url = `http://https://b8a11-server-side-abdullahal5-33g7geoxz.vercel.app//myjobs?email=${user?.email}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setNewData(data));
  //   }, []);
  return (
    <div>
      <Helmet>
        <title>CareerCanvas | My Jobs</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center pt-5">
        <span className="border-l pl-2 border-[#00B0FF]">Your</span>
        <span className="text-[#00B0FF]"> added</span> Jobs
      </h1>
      <hr className="mx-auto w-96 border-[#00B0FF] my-5" />
      <div className="overflow-x-auto flex justify-center px-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Applicants</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((myjob, idx) => (
              <MyJobTable
                refetch={refetch}
                myjob={myjob}
                idx={idx}
                key={idx}
              ></MyJobTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
