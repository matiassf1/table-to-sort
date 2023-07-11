import { useContext } from "react";
import { Table, Loading } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { UserContext } from "./context/UserContext";

export const App = () => {
  const { isLoading, userList, error } = useContext(UserContext);

  return (
    <>
      <div className="page-header">
        <h2>Ordena como quieras mostro</h2>
        <span>{userList?.length} Users.</span>
        <SearchContainer />
      </div>
      {isLoading ? (
        <Loading center={true} />
      ) : ( 
        <div className="wrapper-table">
          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <Table />
          )}
        </div>
      )}
    </>
  );
};
