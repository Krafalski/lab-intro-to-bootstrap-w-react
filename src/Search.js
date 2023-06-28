function Search({ search, handleSearch }) {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };
  return (
    <div className="container my-4 d-none d-lg-block">
      <form>
        <div className="row">
          <div className="col-auto">
            <label htmlFor="search" className="col-form-label">
              Search posts by location...
            </label>
          </div>
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              id="search"
              className="form-control"
              value={search}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-warning">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
