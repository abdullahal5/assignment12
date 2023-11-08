import { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";

const JobTableDetails = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email
    const data = useLoaderData()
    const { _id, photo, name, title, date, deadline, salary , applicants, description, category} = data;
  const [appliedFor, setAppliedFor] = useState(applicants)
  console.log(appliedFor)
  const currentDate = new Date()
  console.log(currentDate)
    const handleApply = (e) =>{
        e.preventDefault()
        const name2 = e.target.name.value;
        const email = e.target.email.value;
        const link = e.target.link.value;
                const data = {
                 category,
                  photo,
                  name,
                  title,
                  date,
                  deadline,
                  salary,
                  applicants,
                  description,
                  name2,
                  email, 
                  link
                } 

        // const apply = {name2, email, link}
        // console.log(apply)
        fetch("http://localhost:5000/apply", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
               Swal.fire({
                 title: "Nice!",
                 text: "You successfylly Applied for the Job",
                 icon: "success",
               });
            }
        })
    }
   
    const handleModal = () =>{
      if (deadline > date) {
        return toast.error("The application time is over");
      }
      else{
       
        document.getElementById("my_modal_3").showModal();
        setAppliedFor(applicants + 1)
        
        
    }
  }
   const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5inyw3v",
        "template_kxip6gc",
        form.current,
        "IXst6eLIBbYF_WpCt"
      )
      .then(
        (result) => {
          console.log(result.text)
          if(result.text){
           return toast.success("The email has been sent")
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
    return (
      <div>
        <div>
          <Toaster />
        </div>
        <Helmet>
          <title>CareerCanvas | All Job Details</title>
        </Helmet>
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
                <h1>Job Applicants Number: {appliedFor}</h1>
              </div>
              <p>Description: {description}</p>
              <div className="card-actions justify-end">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-[#00B0FF] text-white font-bold"
                  onClick={() => {
                    handleModal();
                  }}
                >
                  Apply
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg text-center text-[#00B0FF]">
                      Apply
                    </h3>
                    <p className="py-4">
                      <form
                        ref={form}
                        onSubmit={(e) => {
                          handleApply, sendEmail(e)
                        }}
                      >
                        <div className="text-center">
                          <p className="text-sm py-2">Name:</p>
                          <input
                            defaultValue={name}
                            name="name"
                            className="px-24 py-2 mb-5 border border-[#00B0FF]"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm py-2">Email:</p>
                          <input
                            defaultValue={email}
                            name="email"
                            className="px-24 py-2 mb-5 border border-[#00B0FF]"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm py-2">Resume link: </p>
                          <input
                            name="link"
                            className="px-24 py-2 mb-5 border border-[#00B0FF]"
                            type="text"
                            placeholder="Your Resume Link"
                          />
                        </div>
                        <div>
                          <input
                            className="btn bg-[#00B0FF] text-white w-full"
                            type="submit"
                            value="sumbit"
                          />
                        </div>
                      </form>
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobTableDetails;