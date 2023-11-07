import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddAJob = () => {
      const { user } = useContext(AuthContext);
      const email1 = user?.email;
    const [selectedForm, setSelectedForm] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [application, setapplication] = useState(0)
    const handleAdd = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const title = e.target.title.value
        const category = selectedForm
        const salary = e.target.salary.value;
        const description = e.target.description.value;
        const date = e.target.date.value;
        const deadline = startDate;
        const photo = e.target.photo.value
        const applicants = application
        const job = {
            name, title, category, salary, description,date, deadline, photo, applicants
        }
        const job1 = {
            name, title, category, salary, description,date, deadline, photo, applicants, email1
        }

        console.log(job)
        fetch("http://localhost:5000/jobs",{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "You successfylly added a card",
              icon: "success",
            });
          }
        })
        
        fetch('http://localhost:5000/myjobs', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(job1),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: "Good job!",
                text: "You successfylly added a card",
                icon: "success",
              });
            }
          });
    }
    const handleChange = e =>{
        setSelectedForm(e.target.value)
    }
  return (
    <div className="bg-base-200">
      <h1 className="text-4xl text-center font-semibold py-5">
        Add your job information
      </h1>
      <form onSubmit={handleAdd} className="p-20">
        <div className="flex justify-center gap-10">
          <div className="w-full">
            <p className="text-sm pb-4">User Name:</p>
            <input
              name="name"
              className="pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job Title:</p>
            <input
              name="title"
              className="pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Job title"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full">
            <p className="text-sm pb-4">Select job category:</p>

            <select
              className="w-full mb-5 py-2 border border-[#00B0FF]"
              name="category"
              autoFocus
              onChange={handleChange}
            >
              <option value="">Select a Job category</option>
              <option value="On Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Salary Range:</p>

            <input
              name="salary"
              className=" w-full mb-5 pl-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Salary Range"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="w-full">
            <p className="text-sm pb-4">Job description:</p>

            <input
              name="description"
              className=" pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Job Description"
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job Posting date:</p>
            <input
              name="date"
              className="pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="date"
              placeholder="Job Posting Date"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="w-full">
            <p className="text-sm pb-4">Application Deadline</p>
            <DatePicker
              className="w-[573px] py-3 pl-5 border border-[#00B0FF]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job description:</p>
            <input
              name="photo"
              className=" pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Photo URL"
            />
          </div>
        </div>
        <p className="border border-[#00B0FF] py-3 pl-5 bg-white mx-20">
          Job Applicants Number : {application}
        </p>
        <div>
          <button className="w-full mt-5 text-white font-bold bg-[#00B0FF] py-3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAJob;
