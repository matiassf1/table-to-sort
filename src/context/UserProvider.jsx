import PropTypes from "prop-types";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import { arraySort } from "../helpers/arraySort";
export const UserProvider = ({ children }) => {
  const [userList, setuserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useMemo(async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message || "Error in the request");
      }
      setError(null);
      setuserList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  //as we are working with the array obtained from a single fetch we don't need to add any dependency,
  //but here we could add something like the search to include it in the url of the request and
  //have it as a dependency to update the list of users.

  const handleSort = (sortType) => {
    setIsLoading(true);
    if(sortType !== '1-9' && sortType !== '9-1' && sortType !== 'Z-A' && sortType !== 'A-Z'){
      return console.error(sortType,'Invalid sortType');
    }
    const newUserList = arraySort(userList, sortType);
    setuserList(newUserList);
    setIsLoading(false);
  };

  const handleSearch = () => {
    
  }

  const contextValue = {
    fetchUsers,
    userList,
    isLoading,
    error,
    handleSort
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};