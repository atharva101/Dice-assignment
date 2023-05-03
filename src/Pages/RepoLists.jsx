import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import DropDown from "../Components/Dropdown/DropDown";
import SearchBox from "../Components/SearchBox/Searchbox";

const RepoLists = () => {
  const [searchQuery, setSearchQuery] = useState("a");
  const [sortBy, setSortBy] = useState("stars"); // default sorting option
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortBy}`
      );
      const data = await response.json();
      setRepos(data.items);
    };
    fetchRepos();
  }, [searchQuery, sortBy]);

  return (
    <>
      <SearchBox setSearchQuery={setSearchQuery} />
      <DropDown setSortBy={setSortBy} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {repos?.map((repo) => (
          <Card repo={repo} />
        ))}
      </div>
    </>
  );
};

export default RepoLists;
