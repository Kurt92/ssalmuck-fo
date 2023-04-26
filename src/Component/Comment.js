import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",

    alignItems: "center",
  },
  root: {
    paddingTop: theme.spacing(10),
    padding: theme.spacing(25),
    backgroundColor: theme.palette.background.paper,
  },
  commentInput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  commentButton: {
    marginLeft: theme.spacing(1),
  },
}));

export default function CommentArea() {
  const classes = useStyles();
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // TODO: handle comment submission
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">Comments</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item xs>
          <form onSubmit={handleCommentSubmit}>
            <TextField
              className={classes.commentInput}
              placeholder="Add a comment..."
              fullWidth
              variant="outlined"
              value={comment}
              onChange={handleCommentChange}
              InputProps={{
                endAdornment: (
                  <Button
                    className={classes.commentButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!comment}
                    startIcon={<SendIcon />}
                  >
                    Comment
                  </Button>
                ),
              }}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
