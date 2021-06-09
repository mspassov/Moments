import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts() {
  const classes = useStyles();
  return (
    <div>
      <h2>Post</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
