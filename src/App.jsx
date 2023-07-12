import { useContext, useMemo } from "react";
import { Table, Loading } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { UserContext } from "./context/UserContext";

export const App = () => {
  const { isLoading, userList, searchList, error } = useContext(UserContext);
  const users = useMemo(() => (searchList?.length >= 1 ? searchList : userList), [searchList, userList]);

  return (
    <>
      <div className="page-header">
        <h2>Ordena como quieras mostro</h2>
        <span>{users?.length} Users.</span>
        <SearchContainer />
      </div>
      {isLoading ? (
        <Loading center={true} />
      ) : (
        <div className="wrapper-table">
          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <Table users={users} />
          )}
        </div>
      )}
    </>
  );
};
