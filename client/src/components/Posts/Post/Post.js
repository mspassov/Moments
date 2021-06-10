import React from "react";
import useStyles from "./styles";
import {useSelector} from 'react-redux';

function Post() {
  const classes = useStyles();
  const posts = useSelector(state => state.posts);

  console.log(posts);

  return (
    <div>
      <h3>This is a single post</h3>
    </div>
  );
}

export default Post;
