import { useLoaderData } from "react-router-dom";
import Jobrow from "../../Components/Jobrow/Jobrow";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

const Alljobs = () => {
    const [search, setSearch] = useState('')
    const loader = useLoaderData()
     const style = { color: "#00B0FF", fontSize: "1.5em" };
     
            const searchVal = search.toLowerCase();
            const filteredData = loader.filter(
              (val) =>
                searchVal === "" || val.title.toLowerCase().includes(searchVal)
            );
           
    return (
      <div>
        <h1 className="text-4xl text-center my-5">
          All jobs in <span className="text-[#00B0FF]">tabular form</span>
        </h1>
        <hr className="pt-5 mx-auto w-[450px] border-[#00B0FF]" />
        <div className="relative text-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            className="px-24 py-2 mb-5 border border-[#00B0FF]"
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

        <div className="overflow-x-auto flex justify-center px-20">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Posting Date</th>
                <th>Deadline</th>
                <th>Salary</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              { filteredData.map((job, idx) => (
                <Jobrow job={job} idx={idx} key={job._id}></Jobrow>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Alljobs;