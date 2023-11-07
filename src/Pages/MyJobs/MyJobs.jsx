import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyJobTable from "../../Components/MyJobTable/MyJobTable";

const MyJobs = () => {
    const [newData , setNewData] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() =>{
        const url = `http://localhost:5000/myjobs?email=${user?.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setNewData(data))
    },[])
    return (
      <div>
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
              {newData.map((myjob, idx) => (
                <MyJobTable myjob={myjob} idx={idx} key={idx}></MyJobTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyJobs;