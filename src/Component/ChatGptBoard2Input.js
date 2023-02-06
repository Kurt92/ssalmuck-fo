import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginTop: theme.spacing(2),
    width: "60%",
  },
  viewCount: {
    width: "60%",
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  textArea: {
    marginTop: theme.spacing(2),
    width: "60%",
  },
}));

const NewPostForm = () => {
  const classes = useStyles();

  let boardInputData = () => {
    const param = {};
    let title = document.getElementById("title").value;
    let username = document.getElementById("username").value;
    param.title = title;
    param.username = username;
    console.log("post", param);
    console.log(JSON.stringify(param));

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:8099/board2", JSON.stringify(param), axiosConfig)
      .then(() => {
        console.log("success");
        document.getElementById("title").value = "";
        document.getElementById("username").value = "";
      })
      .catch(() => {
        console.log("fail");
      });
  };

  return (
    <>
      <form className={classes.form}>
        <TextField
          required
          id="username"
          label="User ID"
          aria-readonly={true}
          className={classes.textField}
        />
        <TextField
          required
          id="title"
          label="Title"
          className={classes.textField}
        />
        <TextareaAutosize
          required
          minRows={10}
          id="content"
          label="Content"
          className={classes.textArea}
        />
        <TextField
          id="attached-file"
          label="Attached File"
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Choose File</InputAdornment>
            ),
          }}
        />
        <div>
          {/*<button
            type={"submit"}
            onClick={() => {
              boardInputData();
            }}
          >
            insert
          </button>*/}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewPostForm;
