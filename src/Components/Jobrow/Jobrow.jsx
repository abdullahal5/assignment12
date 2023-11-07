import { Link } from "react-router-dom";

const Jobrow = ({job, idx}) => {
    const {_id, name, title, date, deadline, salary} = job
    return (
      <tr>
        <th>{idx + 1}</th>
        <td>{name}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{deadline}</td>
        <td>{salary}</td>
        <td>
          <Link to={`/jobTableDetails/${_id}`}>
            <button className="bg-[#00B0FF] rounded-lg px-4 py-2 text-white font-bold">
              Details
            </button>
          </Link>
        </td>
      </tr>
    );
};

export default Jobrow;