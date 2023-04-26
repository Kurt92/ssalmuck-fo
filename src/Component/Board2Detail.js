import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import { ThumbUp, ThumbDown } from "@material-ui/icons";
import Comment from "./Comment";

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

export default function Board2Detail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const classes = useStyles();
  const [board, setBoard] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  let params = {
    id: searchParams.get("id"),
  };

  let boadrDetailData = () => {
    let params = {
      id: searchParams.get("id"),
    };
    axios
      .get("http://localhost:8099/board2/detail", { params })
      .then((result) => {
        console.log("response data : ", result.data);
        setBoard(result.data);
        console.log(board);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    boadrDetailData();
  }, []);

  const handleLikeClick = () => {
    setBoard((prevState) => {
      return { ...prevState, likeCount: parseInt(board.likeCount) + 1 };
    });
    console.log("deepcopy", board);
    console.log("deepcopy", board.likeCount);
    let params = {
      flag: "like",
      id: board.id,
      count: board.likeCount,
    };
    axios
      .post("http://localhost:8099/board2/detail/hitLike", params)
      .then((result) => {
        console.log("좋아요");
        console.log("state", board);
        setBoard(result.data);
        console.log(board);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    let params = {
      flag: "disLike",
      count: dislikeCount,
    };
    setDislikeCount(dislikeCount + 1);
    axios
      .post("http://localhost:8099/board2/detail/hitLike")
      .then((result) => {
        console.log("싫어요");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {board != null && (
        <form className={classes.form}>
          <TextField
            required
            id="username"
            label="User ID"
            className={classes.textField}
            inputProps={{ readOnly: true }}
            defaultValue={board.username}
          />
          <TextField
            required
            id="title"
            label="Title"
            className={classes.textField}
            inputProps={{ readOnly: true }}
            defaultValue={board.title}
          />
          <TextareaAutosize
            required
            minRows={10}
            id="content"
            label="Content"
            className={classes.textArea}
            inputProps={{ readOnly: true }}
            defaultValue={board.content}
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
            <IconButton
              color="primary"
              style={{ padding: "50px" }}
              onClick={handleLikeClick}
            >
              <ThumbUp />
              &nbsp;{board.likeHit}
            </IconButton>

            <IconButton
              color="secondary"
              style={{ padding: "50px" }}
              onClick={handleDislikeClick}
            >
              <ThumbDown />
              &nbsp;{board.dislike}
            </IconButton>
          </div>
        </form>
      )}
      <Comment />
    </>
  );
}
