import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortNumericDown,
  BsSortNumericDownAlt,
} from "react-icons/bs";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { SpanSort } from "./";

export const Table = () => {
  const { handleSort, setSortState, sortState, userList, searchList } =
    useContext(UserContext);

  const users = searchList || userList;

  const onChangeSort = (sortType) => {
    if (sortState.type === sortType) {
      setSortState({
        type: sortType,
        fromTop: !sortState.fromTop,
      });
      return;
    }
    setSortState({
      type: sortType,
      fromTop: true,
    });
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
              <div className="sort-column" onClick={() => onChangeSort("id")}>
                ID
                <SpanSort
                  name={"id"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortNumericDown key="lowest" />,
                    <BsSortNumericDownAlt key="highest" />,
                  ]}
                />
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("name")}>
                Name
                <SpanSort
                  name={"name"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortAlphaDown key="lowest" />,
                    <BsSortAlphaDownAlt key="highest" />,
                  ]}
                />
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("username")}
              >
                Username
                <SpanSort
                  name={"username"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortAlphaDown key="lowest" />,
                    <BsSortAlphaDownAlt key="highest" />,
                  ]}
                />
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("city")}>
                City
                <SpanSort
                  name={"city"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortAlphaDown key="lowest" />,
                    <BsSortAlphaDownAlt key="highest" />,
                  ]}
                />
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("email")}
              >
                Email
                <SpanSort
                  name={"email"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortAlphaDown key="lowest" />,
                    <BsSortAlphaDownAlt key="highest" />,
                  ]}
                />
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("company")}
              >
                Company
                <SpanSort
                  name={"company"}
                  type={sortState.type}
                  fromTop={sortState.fromTop}
                  icons={[
                    <BsSortAlphaDown key="lowest" />,
                    <BsSortAlphaDownAlt key="highest" />,
                  ]}
                />
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
