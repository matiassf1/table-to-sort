/* eslint-disable react/display-name */
import React, { useCallback, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { SpanSort } from "./SpanSort";
import PropTypes from "prop-types";
import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortNumericDown,
  BsSortNumericDownAlt,
} from "react-icons/bs";
export const Table = React.memo( ({ users }) => {
  const { handleSort, setSortState, sortState } = useContext(UserContext);

  const onChangeSort = useCallback(
    (sortType) => {
      if (sortState.type === sortType) {
        setSortState({
          type: sortType,
          ascending: !sortState.ascending,
        });
        return;
      }
      setSortState({
        type: sortType,
        ascending: true,
      });
      return;
    },[sortState.type]  
  )
  useEffect(() => {
    if (sortState.type) {
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
                {sortState.type === "id" && (
                  <SpanSort
                    name={"id"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortNumericDown key="lowest" />,
                      <BsSortNumericDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("name")}>
                Name
                {sortState.type === "name" && (
                  <SpanSort
                    name={"name"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortAlphaDown key="lowest" />,
                      <BsSortAlphaDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("username")}
              >
                Username
                {sortState.type === "username" && (
                  <SpanSort
                    name={"username"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortAlphaDown key="lowest" />,
                      <BsSortAlphaDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
            <th>
              <div className="sort-column" onClick={() => onChangeSort("city")}>
                City
                {sortState.type === "city" && (
                  <SpanSort
                    name={"city"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortAlphaDown key="lowest" />,
                      <BsSortAlphaDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("email")}
              >
                Email
                {sortState.type === "email" && (
                  <SpanSort
                    name={"email"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortAlphaDown key="lowest" />,
                      <BsSortAlphaDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
            <th>
              <div
                className="sort-column"
                onClick={() => onChangeSort("company")}
              >
                Company
                {sortState.type === "company" && (
                  <SpanSort
                    name={"company"}
                    type={sortState.type}
                    ascending={sortState.ascending}
                    icons={[
                      <BsSortAlphaDown key="lowest" />,
                      <BsSortAlphaDownAlt key="highest" />,
                    ]}
                  />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map(
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
})
Table.propTypes = {
  users: PropTypes.array,
};
