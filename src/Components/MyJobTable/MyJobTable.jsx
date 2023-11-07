import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobTable = ({ idx, myjob, refetch }) => {
  const { _id, name, title, date, deadline, salary, applicants, description } =
    myjob

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myjobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch()
            }
          });
      }
    });
  };
  
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{deadline}</td>
      <td>{salary}</td>
      <td>{applicants}</td>
      <td>{description}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#00B0FF] rounded-lg px-4 py-2 text-white font-bold"
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={`/updatedJob/${_id}`}>
          <button className="bg-[#00B0FF] rounded-lg px-4 py-2 text-white font-bold">
            update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyJobTable;