import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdatedJOb = () => {
  const { user } = useContext(AuthContext);
  const email1 = user?.email;
  const [selectedForm, setSelectedForm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [application, setapplication] = useState(0);
  const loadedData = useLoaderData();
  const {
    _id,
    name,
    title,
    category,
    date,
    deadline,
    salary,
    applicants,
    description,
    photo,
  } = loadedData;
  console.log(loadedData);

  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const category = selectedForm;
    const salary = e.target.salary.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const deadline = startDate;
    const photo = e.target.photo.value;
    const applicants = application;
    const job1 = {
      name,
      title,
      category,
      salary,
      description,
      date,
      deadline,
      photo,
      applicants,
      email1,
    };

    console.log(job1);
    fetch(`https://b8a11-server-side-abdullahal5.vercel.app/myjobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job1),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "You successfylly updated a card",
            icon: "success",
          });
        }
      });
  };

  const handleChange = (e) => {
    setSelectedForm(e.target.value);
  };
  return (
    <div className="bg-base-200">
      <h1 className="text-4xl text-center font-semibold py-5">
        Update your job information
      </h1>
      <form onSubmit={handleAdd} className="p-20">
        <div className="flex justify-center gap-10">
          <div className="w-full">
            <p className="text-sm pb-4">User Name:</p>
            <input
              defaultValue={name}
              name="name"
              className="pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job Title:</p>
            <input
              defaultValue={title}
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
              defaultValue={category}
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
              defaultValue={salary}
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
              defaultValue={description}
              name="description"
              className=" pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Job Description"
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job Posting date:</p>
            <input
              defaultValue={date}
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
              defaultValue={deadline}
              className="w-[573px] py-3 pl-5 border border-[#00B0FF]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="w-full">
            <p className="text-sm pb-4">Job description:</p>
            <input
              defaultValue={photo}
              name="photo"
              className=" pl-5 w-full mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Photo URL"
            />
          </div>
        </div>
        <p
          defaultValue={applicants}
          className="border border-[#00B0FF] py-3 pl-5 bg-white mx-20"
        >
          Job Applicants Number : {application}
        </p>
        <div>
          <button
            type="submit"
            className="w-full mt-5 text-white font-bold bg-[#00B0FF] py-3 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedJOb;
