import PropTypes from "prop-types";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import { arraySort } from "../helpers/arraySort";
export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sortState, setSortState] = useState({
    type: null,
    fromTop: null,
  });

  const fetchUsers = useMemo(async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message || "Error in the request");
      }
      setError(null);
      setUserList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //as we are working with the array obtained from a single fetch we don't need to add any dependency,
  //but here we could add something like the search to include it in the url of the request and
  //have it as a dependency to update the list of users.

  const handleSort = () => {
    if (searchList?.length >= 1) {
      const newUserList = arraySort(
        searchList,
        sortState.fromTop,
        sortState.type
      );
      setSearchList(newUserList);
    } else {
      const newUserList = arraySort(
        userList,
        sortState.fromTop,
        sortState.type
      );
      setUserList(newUserList);
    }
  };

  const handleSearch = (search, columnName = "name") => {
    if (search.length === 0) {
      setSearchList([]);
      setError("Put something to search");
    }
    const newUserList = userList.filter((user) =>
      user[columnName]?.toLowerCase().startsWith(search)
    );
    if (newUserList.length === 0) {
      setError("User Not Found");
      setSearchList([]);
      return;
    }
    setError(null);
    setSearchList(newUserList);
  };

  const contextValue = {
    fetchUsers,
    userList,
    isLoading,
    error,
    handleSort,
    handleSearch,
    setSortState,
    sortState,
    searchList,
    setSearchList,
    setError,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
