import PropTypes from "prop-types";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export const Table = ({ users }) => {
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>
              <div className="sort-column">
                ID
                <span>
                  <AiOutlineSortAscending />
                </span>
              </div>
            </th>
            <th>
              <div className="sort-column">
                Name
                <span>
                  <AiOutlineSortAscending />
                </span>
              </div>
            </th>
            <th>Username</th>
            <th>
              <div className="sort-column">
                City
                <span>
                  <AiOutlineSortDescending />
                </span>
              </div>
            </th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {/* ID, Name, Username, Email, City, and Company. */}
          {users.map(
            ({
              id,
              name,
              username,
              email,
              address: { city },
              company: { name: companyName },
            }) => {
              return (
                <tr key={id}>
                  <td data-cell="ID" >{id}</td>
                  <td data-cell="Name" >{name}</td>
                  <td data-cell="Username" >{username}</td>
                  <td data-cell="City" >{city}</td>
                  <td data-cell="Email" >{email}</td>
                  <td data-cell="Company">{companyName}</td>
                </tr>
              );
            }
          )}
          {/* <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 5</td>
          <td>Data 6</td>
          <td>Data 7</td>
          <td>Data 8</td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  users: PropTypes.array.isRequired,
};
