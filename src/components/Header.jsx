import { useContext } from "react";
import { SearchContainer } from "./SearchContainer";
import { UserContext } from "../context/UserContext";

export const Header = () => {
  const { userList, searchList } = useContext(UserContext);
  const users = searchList?.length >= 1 ? searchList : userList;
  console.log(users);
  return (
    <div className="page-header">
      <h2>Ordena como quieras mostro</h2>
      <span>{users?.length} Users.</span>
      <SearchContainer />
    </div>
  );
};
