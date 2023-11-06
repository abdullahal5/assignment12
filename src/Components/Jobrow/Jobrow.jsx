const Jobrow = ({job, idx}) => {
    const {name, title, date, deadline, salary} = job
    return (
      <tr>
        <th>{idx + 1}</th>
        <td>{name}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{deadline}</td>
        <td>{salary}</td>
        <td>
          <button className="bg-[#00B0FF] px-4 py-2 text-white font-bold">Details</button>
        </td>
      </tr>
    );
};

export default Jobrow;