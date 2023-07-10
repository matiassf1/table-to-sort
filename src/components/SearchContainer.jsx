import { useContext, useEffect } from "react";
import { useForm } from "../hooks";
import { FormRow } from "./";
import { UserContext } from "../context/UserContext";

export const SearchContainer = () => {
  const { search, onInputChange } = useForm({ search: "" });

  const { handleSearch, setSearchList } = useContext(UserContext);

  useEffect(() => {
    // providerByContext
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search)
  }

  const clearValues = (e) => {
    e.preventDefault();
    setSearchList(null);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h5 className="start">Search Form</h5>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="search by name"
            name="search"
            value={search}
            onInputChange={onInputChange}
          />
          <button
            type="button"
            className="btn"
            // disabled={isLoading}
            onClick={clearValues}
          >
            clear values
          </button>
        </div>
      </form>
    </>
  );
};
