const AppliedJobTable = ({items, idx}) => {
    const {name, title, date, deadline, salary} = items
    return (
 
        <tr>
          <th>{idx + 1}</th>
          <td>{name}</td>
          <td>{title}</td>
          <td>{date}</td>
          <td>{deadline}</td>
          <td>{salary}</td>
        </tr>

    );
};

export default AppliedJobTable;