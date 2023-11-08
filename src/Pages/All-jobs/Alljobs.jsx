import { useLoaderData } from "react-router-dom";
import Jobrow from "../../Components/Jobrow/Jobrow";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Alljobs = () => {
  const loader = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    if (loader) {
    setLoading(false);
  }
  },[])
  const style = { color: "#00B0FF", fontSize: "1.5em" };

  const searchVal = search.toLowerCase();
  const filteredData = loader.filter(
    (val) => searchVal === "" || val.title.toLowerCase().includes(searchVal)
  );

  return (
    <div>
      <Helmet>
        <title>CareerCanvas | All Jobs</title>
      </Helmet>
      <h1 className="text-4xl text-center my-5">
        All jobs in <span className="text-[#00B0FF]">tabular form</span>
      </h1>
      <hr className="pt-5 mx-auto w-60 md:w-[450px] lg:w-[450px] border-[#00B0FF]" />
      <div className="relative text-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          className="px-24 w-60 lg:w-auto md:w-auto py-2 mb-5 border border-[#00B0FF]"
          type="text"
          placeholder="search by title"
        />
        <button className="bg-[#00B0FF] rounded-lg ml-5 py-[9px] px-4 text-white font-bold">
          Search
        </button>
        <BsSearch
          style={style}
          className=" absolute top-2 left-[470px]"
        ></BsSearch>
      </div>

      <div className=" flex justify-center px-20">
        <table className="table table-xs">
          <thead className="">
            <tr className="">
              <th>S. No.</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          {loading ? (
            <div className="flex justify-center h-[100vh] items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
              <tbody className="">
                {filteredData.map((job, idx) => (
                  <Jobrow job={job} idx={idx} key={job._id}></Jobrow>
                ))}
              </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Alljobs;
