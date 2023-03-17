export type TableProps = {
  data: {
    firstName: string;
    lastName: string;
    age: number;
  }[];
};
export const Table = (props: TableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => (
          <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
