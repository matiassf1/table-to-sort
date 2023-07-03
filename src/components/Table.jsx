import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Column 1</th>
          <th className="column-sort">
            Column 2
            <span className="sort-icon">
              <AiOutlineSortAscending />
            </span>
          </th>
          <th>Column 3</th>
          <th className="column-sort">
            Column 4
            <span className="sort-icon">
              <AiOutlineSortDescending />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};
