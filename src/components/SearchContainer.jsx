import { FormRow } from "./";


export const SearchContainer = () => {
  return (
    <>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            // type="text"
            // labelText="search"
            // name="search"
            // value={localSearch}
            // onInputChange={optimizedDebounce}
          />
        </div>
      </form>
    </>
  );
};
