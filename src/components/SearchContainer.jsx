/* eslint-disable react/display-name */
import React, { useContext, useCallback } from "react";
import { useForm } from "../hooks";
import { FormRow } from "./";
import { UserContext } from "../context/UserContext";

export const SearchContainer = React.memo(() => {
  const { search, onInputChange, onResetForm } = useForm({ search: "" });

  const { handleSearch, setSearchList, setError } = useContext(UserContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSearch(search);
    },
    [search, handleSearch]
  );

  const clearValues = useCallback(
    (e) => {
      e.preventDefault();
      onResetForm();
      setError(null);
      setSearchList([]);
    },
    [onResetForm, setError, setSearchList]
  );
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
});
