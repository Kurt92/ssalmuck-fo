import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#eee",
    padding: "15px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Company Name
        </Typography>
      </Container>
    </footer>
  );
}
