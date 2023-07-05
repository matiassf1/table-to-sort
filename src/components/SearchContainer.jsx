import { useForm } from "../hooks";
import { FormRow } from "./";

export const SearchContainer = () => {
  const { search, onInputChange } = useForm({ search: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('hi');
  }
  return (
    <>
      <form className="form">
        <h5 className="start">Search Form</h5>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="search any user"
            name="search"
            value={search}
            onInputChange={onInputChange}
          />
          <button
            type="button"
            className="btn"
            // disabled={isLoading}
            onClick={handleSearch}
          >
            clear filters
          </button>
        </div>
      </form>
    </>
  );
};
