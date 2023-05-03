

const DropDown = ({ setSortBy }) => {
  return (
    <>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="stars">Stars</option>
        <option value="watchers">Watchers Count</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created">Created At</option>
        <option value="updated">Updated At</option>
      </select>
    </>
  );
};

export default DropDown;
