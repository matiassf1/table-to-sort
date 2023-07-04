import { useEffect, useState } from "react";
import { Table, Loading } from "./components";

export const App = () => {
  const [userList, setuserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        setIsLoading(true);
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/users/0`
        );
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message || "Error in the request");
        }
        setuserList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  if (isLoading) {
    return <Loading center={true} />;
  }

  return (
    <div className="content">
      <h2>Hello - App!</h2>
      {!error ? (
        // <Error message={error} />
        <span>{error}</span>
      ) : (
        <>
          <span>{userList?.length} Users.</span>
          <Table />
        </>
      )}
    </div>
  );
};
