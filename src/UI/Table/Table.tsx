import "./Table.scss";

interface TableData {
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Closed" | "Pending" | "Inactive";
  date: string;
}

interface TableProps {
  title?: string;
  data?: TableData[];
  columns?: string[];
}

const Table = ({
  title = "New Leads",
  data = [
    {
      name: "Jhon Doe",
      email: "jhonseo@gamil.com",
      phone: "09876546321",
      status: "Active",
      date: "Aug 12, 2025",
    },
    {
      name: "Jhon Doe",
      email: "jhonseo@gamil.com",
      phone: "09876546321",
      status: "Closed",
      date: "Aug 12, 2025",
    },
  ],
  columns = ["Name", "Email", "Phone", "Status", "Date"],
}: TableProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "table-status--active";
      case "Closed":
        return "table-status--closed";
      case "Pending":
        return "table-status--pending";
      case "Inactive":
        return "table-status--inactive";
      default:
        return "";
    }
  };

  return (
    <div className="table-container">
      {title && <h3 className="table-title">{title}</h3>}
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="table-header-cell">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
                <td className="table-cell">{row.name}</td>
                <td className="table-cell">{row.email}</td>
                <td className="table-cell">{row.phone}</td>
                <td className="table-cell">
                  <span className={`table-status ${getStatusClass(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="table-cell">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;





