import React from "react";
import "./Card.styles.css"; // Import CSS file for the component

const Card = ({ repo }) => {
  return (
    <div className="card">
      <img src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`} />
      <div className="card-details">
        <h2>{repo.name}</h2>
        <p>{repo.stargazers_count} stars</p>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
      </div>
    </div>
  );
};

export default Card;
