import React, { useState } from "react";
const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="post">
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <button
        onClick={() => {
          setIsLiked(!isliked);
        }}
      >
        {isLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};
