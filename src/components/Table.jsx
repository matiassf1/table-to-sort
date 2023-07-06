import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortNumericDown,
  BsSortNumericDownAlt,
} from "react-icons/bs";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export const Table = () => {
  const {
    handleSort,
    setSortState,
    sortState,
    userList: users,
  } = useContext(UserContext);

  const onChangeSort = (sortType) => {
    if (sortState.type === sortType) {
      setSortState({
        type: sortType,
        fromTop: !sortState.fromTop,
      });
      // handleSort();
      return;
    }
    setSortState({
      type: sortType,
      fromTop: true,
    });
    // handleSort();
    return;
  };

  useEffect(() => {
    if (sortState.type !== null) {
      handleSort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortState]);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>
              {/* TODO: Crear un componente tdSort para encapsular este codigo repetitivo seria algo asi <TdSort handleClick={blabla} columnName={blabla}/> */}
              <div className="sort-column" onClick={() => onChangeSort("id")}>
                ID
                <span>
                  {sortState.type === "id" && sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortNumericDown />
                    ) : (
                      <BsSortNumericDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("name")}>
                Name
                <span>
                  {sortState.type === "name" && sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortAlphaDown />
                    ) : (
                      <BsSortAlphaDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("username")}
              >
                Username
                <span>
                  {sortState.type === "username" &&
                  sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortAlphaDown />
                    ) : (
                      <BsSortAlphaDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("city")}>
                City
                <span>
                  {sortState.type === "city" && sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortAlphaDown />
                    ) : (
                      <BsSortAlphaDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("email")}
              >
                Email
                <span>
                  {sortState.type === "email" && sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortAlphaDown />
                    ) : (
                      <BsSortAlphaDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("company")}
              >
                Company
                <span>
                  {sortState.type === "company" &&
                  sortState.fromTop !== null ? (
                    sortState.fromTop === true ? (
                      <BsSortAlphaDown />
                    ) : (
                      <BsSortAlphaDownAlt />
                    )
                  ) : null}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
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
                  <td data-cell="ID">{id}</td>
                  <td data-cell="Name">{name}</td>
                  <td data-cell="Username">{username}</td>
                  <td data-cell="City">{city}</td>
                  <td data-cell="Email">{email}</td>
                  <td data-cell="Company">{companyName}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
