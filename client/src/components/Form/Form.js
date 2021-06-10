import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {};
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Moment</Typography>
        <TextField
          name="creator"
          variant="outlined"
          lavel="Creator"
          fullWidth
          value={postData.creator}
          onchange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        />
      </form>
    </Paper>
  );
};

export default Form;
