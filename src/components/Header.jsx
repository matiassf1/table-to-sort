import { useContext } from "react";
import { SearchContainer } from "./SearchContainer";
import { UserContext } from "../context/UserContext";

export const Header = () => {
  const { userList } = useContext(UserContext);
  return (
    <div className="page-header">
      <h2>Ordena como quieras mostro</h2>
      <span>{userList?.length} Users.</span>
      <SearchContainer />
    </div>
  );
};
