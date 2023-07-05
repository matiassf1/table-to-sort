import { useContext } from "react";
import { Table, Loading } from "./components";
import { SearchContainer } from "./components/SearchContainer";
import { UserContext } from "./context/UserContext";

export const App = () => {

  const {
    isLoading,
    error,
    userList
  } = useContext(UserContext)

  if (isLoading) {
    return <Loading center={true} />;
  }

  return (
    <div className="page-header">
      <h2>Hello - App!</h2>
      {error ? (
        // <Error message={error} />
        <span>{error}</span>
      ) : (
        <>
          <span>{userList?.length} Users.</span>
          <SearchContainer />
          <Table users={userList} />
        </>
      )}
    </div>
  );
};
