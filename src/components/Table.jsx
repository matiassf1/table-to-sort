import PropTypes from "prop-types";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export const Table = ({ users }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
        <th className="sort-column">

            ID
            <span>
              <AiOutlineSortAscending />
            </span>
          </th>
          <th className="sort-column">

            Name
            <span>
              <AiOutlineSortAscending />
            </span>
          </th>
          <th>Username</th>
          <th className="sort-column">
            City
            <span>
              <AiOutlineSortDescending />
            </span>
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
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{city}</td>
                <td>{email}</td>
                <td>{companyName}</td>
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
  );
};

Table.propTypes = {
  users: PropTypes.array.isRequired,
};
