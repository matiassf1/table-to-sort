import { useContext } from "react";
import { Table, Loading } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { UserContext } from "./context/UserContext";

export const App = () => {
  const { isLoading, error, userList } = useContext(UserContext);

  if (isLoading) {
    return <Loading center={true} />;
  }

  if (error) {
    return <span>{error}</span>; // <Error message={error} />
  }

  return (
    <>
      <div className="page-header">
        <h2>EL TAXI POR TU CASA!</h2>
        <span>{userList?.length} Users.</span>
        <SearchContainer />
      </div>
      <div className="wrapper-table">
        <Table />
      </div>
    </>
  );
};
