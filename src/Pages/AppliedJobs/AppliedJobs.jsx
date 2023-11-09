import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AppliedJobTable from "../../Components/AppliedJobTable/AppliedJobTable";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [applied, setApplied] = useState([]);
  const [value, setValue] = useState("");
  // console.log(value)
  // const url = `http://https://b8a11-server-side-abdullahal5-33g7geoxz.vercel.app//apply?email=${user?.email}`;
  useEffect(() => {
    fetch(
      `http://https://b8a11-server-side-abdullahal5-33g7geoxz.vercel.app/apply?email=${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setApplied(data));
  }, []);

  const currentValue = (e) => {
    setValue(e.target.value);
  };

  const inputData = value.toLowerCase();
  const filteredData = applied.filter(
    (i) => inputData === "" || i.category.toLowerCase() === inputData
  );
  console.log(filteredData);

  return (
    <div>
      <Helmet>
        <title>CareerCanvas | Applied Jobs</title>
      </Helmet>
      <h1 className="text-4xl text-center pt-5 ">
        Your <span className="text-[#00B0FF]">applied</span> Jobs
      </h1>
      <div>
        <h2 className="text-2xl text-center py-5 ">Select by Category</h2>
        <div className="text-center">
          <select
            className="w-[200px] mb-5 py-2 border border-[#00B0FF]"
            name="category"
            autoFocus
            onChange={currentValue}
          >
            <option value="">Select a category</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
      <hr className="border-[#00B0FF] py-5 w-96 mx-auto" />
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
            </tr>
          </thead>
          <tbody>
            {filteredData.map((items, idx) => (
              <AppliedJobTable
                key={items._id}
                idx={idx}
                items={items}
              ></AppliedJobTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
