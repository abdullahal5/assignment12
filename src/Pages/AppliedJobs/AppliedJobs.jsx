import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AppliedJobTable from "../../Components/AppliedJobTable/AppliedJobTable";

const AppliedJobs = () => {
    const {user} = useContext(AuthContext)
    const [applied, setApplied] = useState([]);
    // console.log(applied)
    // console.log(applied)
    const url = `http://localhost:5000/apply?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setApplied(data))
    },[])
    return (
      <div>
        <h1 className="text-4xl text-center py-5">
          Your <span className="text-[#00B0FF]">applied</span> Jobs
        </h1>
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
              {
                applied.map((items, idx) => <AppliedJobTable key={items._id} idx={idx} items={items} ></AppliedJobTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AppliedJobs;