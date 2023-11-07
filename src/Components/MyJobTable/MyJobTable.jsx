const MyJobTable = ({ idx, myjob }) => {
        const { _id, name, title, date, deadline, salary, applicants, description } = myjob;
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
        <button  className="bg-[#00B0FF] rounded-lg px-4 py-2 text-white font-bold">
          Delete
        </button>
      </td>
      <td>
        <button className="bg-[#00B0FF] rounded-lg px-4 py-2 text-white font-bold">
          update
        </button>
      </td>
    </tr>
  );
};

export default MyJobTable;